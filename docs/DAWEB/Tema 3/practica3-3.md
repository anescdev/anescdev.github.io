# Práctica 3.3: Despliegue de una aplicación Flask (Python)

!!! danger "Cuidao"
    Falta documentar

## Inicialización y despliegue básico de aplicación
### Instalación de pipenv
![Instalación de pipenv y pip](../../images/pcr33/pipenv-installation.png)

### Inicialización de aplicación
![Clonación de la aplicación](../../images/pcr33/project-clone.png)

![Creación del fichero .env](../../images/pcr33/env-file-creation.png)

![Creación de entorno virtual](../../images/pcr33/virtual-env-creation.png)

![Instalación de dependencias](../../images/pcr33/python-app-dependencies-installation.png)

![Instalación de dependencias 2](../../images/pcr33/python-app-dependencies-installation-2.png)

### Creación de archivo de wsgi
![Creación de archivo de arranque de app](../../images/pcr33/python-app-entrypoint.png)
### Prueba de funcionamiento
![Probamos si funciona](../../images/pcr33/python-app-test.png)

## Servicio Gunicorn con Systemd

### Prueba de funcionamiento de Gunicorn
![Probamos si funciona correctamente con Gunicorn](../../images/pcr33/gunicorn-test.png)

### Obtención de ruta del ejecutable de gunicorn
![Obtenemos el directorio del entorno virtual](../../images/pcr33/gunicorn-bin-directory.png)

### Creación de servicio Systemd
![Creación del servicio](../../images/pcr33/gunicorn-service-systemd.png)

## Creación host en Nginx

![Creación del archivo host](image-11.png)

![Creación de enlace simbólico](image-12.png)

![Añadir a hosts de la máquina anfitriona el nuevo host](image-13.png)

![Prueba de que funciona correctamente](image-10.png)

## Cuestiones
!!! question "Cuestión 1"
    Busca, lee, entiende y explica qué es y para que sirve un servidor WSGI

    Un servidor WSGI es un intermediario entre el servidor web y el servidor de aplicaciones. Es un estándar que permite
    facilitar el unir un servidor web a uno o varios de aplicaciones destinado a Python. Las peticiones que le llegan al servidor web
    este las pasa al servidor WSGI y el servidor WSGI las pasa a la aplicación correspondiente, o la instancia de esta ya que si lo permite 
    puedes tener varias instancias de una misma aplicación funcionando, actuando de balanceador de carga, como Gunicorn