# Práctica 2.2: Autenticación en un servidor web Nginx
## Introducción
En esta práctica se va a implementar autenticación en Nginx, esta será la autenticación `basic` 
la cuaĺ es definida en el estándar de HTTP, aunque sirve para algunas pruebas no es un método recomendado
actualmente para la autenticación de usuarios ya que existen otras mucho más seguras y completas.

Para hacer esto necesitaremos el paquete openssl para poder crear las contraseñas, generalmente viene 
instalado pero en caso de que no, ejecuta el siguiente comando en tu máquina Debian 12, comprobará si 
está instalado y en caso de que no, lo instalará automáticamente:

```bash
openssl -h 2>/dev/null && echo "OpenSSL está instalado en el sistema" || (sudo apt-get update && sudo apt-get install -y openssl)
```
## Añadir autenticación basic a Nginx
### Generar usuarios y contraseñas
![alt text](../../images/prc22/nginx_auth_gen_user.png)
Para poder usar la autenticación "basic" de HTTP se debe de generar un usuario, contraseña y guardarlo en un archivo para que mas tarde sea
referenciado por algún host configurado en Nginx y poder proteger las rutas haciéndolas accesibles únicamente con los usuarios del archivo. Dicho archivo deberá de tener la siguiente sintáxis:
```
<usuario>:<hash-contraseña>
<usuario>:<hash-contraseña>
<usuario>:<hash-contraseña>
...
```

El primer comando que se ejecuta es para mostrar un mensaje con el nombre de usuario en terminal que es `echo` pero podemos redirigir la salida 
del comando usando el operador de redirección `>>`, esto permite hacer lo que se ha comentado pero sin aplastar todo el contenido del archivo, 
añadiendolo al final de este. El archivo como se ve en el comando es `.htpasswd` que se guardará dentro de `/etc/nginx`. 

El segundo comando usado lo que hace es usar el software `openssl` para generar el hash de la contraseña que elijamos, el parámetro `apr1`
indica que el hash generado usará el algoritmo MD5 con la variante de apache. Nos preguntará por la contraseña de querramos hashear y escribirá 
en la salida por defecto la contraseña hasheada pero redirigimos la salida al archivo `.htpasswd`;

Si nos fijamos los comandos están envuelto con otro que es `sh` 
debido a que necesitamos permisos de administrador para guardar o crear el archivo en ese directorio usando el operador de redirección.

El uso de estos dos comandos reiteradas veces permitirá crear los usuarios. Si necesitas esto en otro archivo diferente simplemente cambia el
nombre del archivo al que rediriges la salida y ya tendrás otro archivo con diferentes usuarios.

### Configurar el archivo de host de Nginx

![Configuración del host en Nginx](../../images/prc22/nginx_auth_host_config.png)
Para poder proteger la web, se deberá de añadir dos directivas al archivo de host, estas directivas no se añaden al bloque `server{...}` sino
al bloque `location{...}` para así poder tener en una misma web diferentes rutas las cuales unas estén disponible a todos los usuarios y otras
a los usuarios que permitamos nosotros por medio del archivo que hemos creado.

Como se ve en la captura necesitamos añadir las siguientes directivas:  

* auth_basic: con el mensaje que enviará al usuario si ha cancelado el inicio de sesión.
* auth_basic_user_file: ruta al archivo que hemos creado anteriormente. Puede estar en donde creas conveniente.

### Probamos web
#### Inicio de sesión
![Formulario de inicio de sesión](../../images/prc22/nginx_auth_login_form.png)

Al acceder a la ruta nos saltará un formulario del navegador donde nos pide que introduzcamos los credenciales para acceder, 
estos credenciales si todo sale como tiene que salir, son los dos creados anteriormente, `manuel` y `ruiz` cuya contraseña 
es el mismo usuario.

#### Inicio de sesión exitoso
![Web tras iniciar sesión](../../images/prc22/nginx_auth_success_login.png)
Aquí se puede comprobar que tras introducir los credenciales correctos podemos acceder a la web que ya teníamos. Si nos 
fijamos en las cabeceras enviadas hay una muy importante que es `Authorization` donde indica que el tipo de autenticación 
es `basic` junto al usuario y contraseña codificados en base64.

#### Inicio de sesión cancelado
![Web tras cancelar el incio de sesión](../../images/prc22/nginx_auth_cancel_login.png)
Si cancelamos el inicio de sesión, la web mostrará el error 401 del estándar HTTP, este se muestra cuando un usuario intenta 
acceder a un recurso protegido en un servidor sin introducir unas credenciales válidas. En la captura se puede ver en las 
cabeceras de respuesta la cabecera `WWW-Authenticate` que indica de nuevo el tipo de autenticación y una palabra clave 
`realm` que contiene el mensaje que introducimos en el apartado anterior.
## Referencias
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)
* [Material del profesor](https://raul-profesor.github.io/DEAW/P1.2/)