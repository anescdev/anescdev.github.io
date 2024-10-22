# Práctica 2.3: Proxy inverso con Nginx
## Introducción

Para configurar un servidor proxy, en esta práctica vamos a clonar la máquina virtual que teníamos, indicando previamente que genere una MAC para que al momento de obtener una IP no nos provoque ningún conflicto, para que nos entendamos en la práctica tendremos la máquina del `servidor web` que contendrá la página web que queremos mostrar, y la máquina del `proxy` que se encargará de dirigir la petición al servidor y de devolver la respuesta de este al cliente.

## Configuración del servidor web
![Desactivación de configuración de la práctica anterior](image.png)

Para no tocar lo que ya tenemos funcionando, vamos a trabajar en una copia del archivo de configuración del servidor web, 
para empezar debemos de borrar el enlace simbólico hacia la configuración de la carpeta `sites-enabled`. Con esto, desactivaremos
el host de la anterior práctica.

![Copia del archivo de configuración](image-1.png)

Ahora copiamos el archivo de configuración con el nuevo nombre que será el cuál vamos a modificar durante la práctica

![Configuración del archivo webserver](image-11.png)

Cambiamos el puerto de la configuración del host sin el cifrado, ya que no nos sirve ya este server para lo que queremos hacer ahora.

![Crear enlace simbólico](image-3.png)

Habilitamos el sitio nuevo creando el enlace simbólico al `sites-enabled`.

![Comprobamos la configuración y reinicio](image-5.png)

Comprobamos la configuración y reiniciamos String

## Configuración del proxy inverso
![Desactivamos web del servidor que contendrá el proxy](image-4.png)

Volvemos desactivar la web activa del servidor proxy ya que aquí tendríamos la misma configuración que en la práctica anterior.

![configuración del proxy](image-6.png)

Creamos un archivo nuevo de configuración ya que no nos hace falta rescatar nada de la antigua, en mi caso se llama `proxy` y se hace la configuración básica con `listen`, `server_name` y la directiva importante, `proxy_pass`. 
Esta directiva lo que hará es pasar la petición a la URL que se le indique para que la resuelva esta, y el proxy esperará a que termine para devolversela al cliente.

![Añadimos al host del proxy el servidor web](image-8.png)

Para que el proxy encuentre la web que tenemos funcionando en el servidor, debemos
de añadir en su archivo de hosts localizado en `/etc/hosts` la ip del servidor y
el dominio que le hemos configurado anteriormente.

![enlazamos proxy](image-7.png)

Activamos el proxy haciendo un enlace simbólico a `sites enabled` del servidor del proxy.

![Probamos configuración](image-9.png)

Se comprueba que la configuración es correcta usando el comando `sudo nginx -t ` y después se reincia el servidor web.

## Demostración del servidor proxy

Para comprobar que funciona correctamente nos dirigimos a la URL del proxy y podremos comprobar como nos muestra la página configurada en la otra máquina virtual sin que cambie la URL en el navegador.

## Modificar respuesta por medio del proxy

Para demostrar que desde el proxy podemos modificar la respuesta enviada por el
servidor web, vamos a añadir una cabecera a esta. Esto se hará mediante la directiva
`add_header <nombre_cabecera> <valor_cabecera>`. Esta cabecera puede estar dentro del bloque `server{...}`, `location{...}` o `http{...}` pero nosotros la pondremos dentro de location.

### Configuración del servidor web
![Añadimos cabecera en el servidor web](image-12.png)

También pondremos la directiva dentro del servidor web ya que queremos ver como 
aparece tanto las cabeceras del servidor como del proxy, en este caso añadiremos la cabecera Host con el valor que se muestra en captura.


![Añadimos cabecera en el proxy](image-10.png)

Ahora hacemos lo mismo pero en el proxy y cambiando el valor de la cabecera.

### Demostración