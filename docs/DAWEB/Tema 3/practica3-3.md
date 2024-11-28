# Práctica 3.3: Despliegue de una aplicación Flask (Python)

!!! danger "Cuidao"
    Falta documentar

## Inicialización y despliegue básico de aplicación
### Instalación de pipenv
![Instalación de pipenv y pip](../../images/pcr33/image.png)

### Inicialización de aplicación
![Clonación de la aplicación](image-4.png)

![Creación del fichero .env](image.png)

![Creación de entorno virtual](image-6.png)

![Instalación de dependencias](image-1.png)

![Instalación de dependencias 2](image-2.png)
### Creación de archivo de wsgi
![Creación de archivo de arranque de app](image-5.png)
### Prueba de funcionamiento
![Probamos si funciona](image-7.png)

## Servicio Gunicorn con Systemd

### Prueba de funcionamiento de Gunicorn
![Probamos si funciona correctamente con Gunicorn](image-8.png)

### Obtención de ruta del ejecutable de gunicorn
![Obtenemos el directorio del entorno virtual](image-9.png)
/home/anes/.local/share/virtualenvs/proyectaso-8Ul5lXJ6/bin/gunicorn
### Creación de servicio Systemd
![Creación del servicio](image-14.png)

## Creación host en Nginx

![Creación del archivo host](image-11.png)

![Creación de enlace simbólico](image-12.png)

![Añadir a hosts de la máquina anfitriona el nuevo host](image-13.png)

![Prueba de que funciona correctamente](image-10.png)

## Cuestiones
!!! question "Cuestión 1"
    Busca, lee, entiende y explica qué es y para que sirve un servidor WSGI


