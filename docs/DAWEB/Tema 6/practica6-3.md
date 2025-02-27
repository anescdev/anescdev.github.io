# Práctica 6.3: Despliegue de servidores web con usuarios autenticados mediante LDAP usando Docker y docker-compose

## Despliegue con Docker Compose

### Preparar ficheros para los contenedores

![Página que queremos proteger](../../images/pcr63/image-2.png)

![Configuración de NGINX para conectar con el servidor LDAP](../../images/pcr63/image-1.png)

### Creación de los contenedores

![Creación del docker compose](../../images/pcr63/image-5.png)

![Despliegue de contenedor](../../images/pcr63/image.png)

### Acceso a la web

![Acceso a la web protegida](../../images/pcr63/image-3.png)

![Muestra de la web protegida](../../images/pcr63/image-4.png)

## Despliegue con Docker

### Preparar ficheros para los contenedores

![Página PHP que queremos proteger](../../images/pcr63/image-6.png)

![Fichero de configuración](../../images/pcr63/image-8.png)

![Fichero htaccess](../../images/pcr63/image-9.png)

### Creación de la imagen
![Fichero Dockerfile](../../images/pcr63/image-7.png)

![Contrucción de la imagen](../../images/pcr63/image-10.png)

### Creación del contenedor

![Creación del contenedor](../../images/pcr63/image-11.png)

### Prueba de funcionamiento

![Introducir credenciales al servidor](../../images/pcr63/image-12.png)

![Muestra el contenido de index.php](../../images/pcr63/image-13.png)
