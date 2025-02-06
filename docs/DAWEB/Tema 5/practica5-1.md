# Práctica 5.1: Ejercicios de Git

## Ejercicios (I)
### Ejercicio 1
#### Creación del repositorio
![Creación del repo](../../images/pcr51/image.png)
![Clonación del repo](../../images/pcr51/image-1.png)

#### Readme
![Readme](../../images/pcr51/image-2.png)

#### Commit inicial
![Commit](../../images/pcr51/image-3.png)

#### Push inicial
![Push inicial](../../images/pcr51/image-4.png)

#### Ignorar archivos
![Creación del fichero](../../images/pcr51/image-5.png)
![Creación de la carpeta](../../images/pcr51/image-6.png)
![Creación del gitignore](../../images/pcr51/image-7.png)


#### Añadir fichero 1.txt
![Añadir fichero](../../images/pcr51/image-8.png)

#### Crear el tag v0.1
![Crear tag v0.1](../../images/pcr51/image-9.png)

#### Subir el tag v0.1
![Subir tag](../../images/pcr51/image-10.png)

![Prueba del tag](../../images/pcr51/image-11.png)

#### Cuenta de GitHub
##### Poner una foto en vuestro perfil de GitHub.
![Ajustes del perfil](../../images/pcr51/image-32.png)

![Ajustar imagen](../../images/pcr51/image-33.png)

##### Poner el doble factor de autentificación en vuestra cuenta de GitHub.
![Autenticación de doble factor](../../images/pcr51/image-34.png)

#### Uso social de GitHub
##### Preguntar los nombres de usuario de GitHub de 2 de tus compañeros de clase, búscalos, y sigueles.
![Natividad Marguez](../../images/pcr51/image-35.png)
![Jaime Grueso](../../images/pcr51/image-36.png)

##### Seguir los repositorios DEAW del resto de tus compañeros.
![Repo Nati](../../images/pcr51/image-37.png)
![Repo Jaime Grueso](../../images/pcr51/image-38.png)

##### Añadir una estrella a los repositorios DEAW del resto de tus compañeros.
![Estrellita Nati](../../images/pcr51/image-39.png)
![Estrellita Jaime](../../images/pcr51/image-40.png)

#### Crear una tabla
![Modificación del readme](../../images/pcr51/image-12.png)

#### Colaboradores
Añadir a https://github.com/dlopezmfp como colaborador

![Apartado de colaboradores en el repo](../../images/pcr51/image-13.png)

![Añadir profesor](../../images/pcr51/image-14.png)

![Añadir profesor 2](../../images/pcr51/image-15.png)

### Ejercicio 2
#### Crear una rama v0.2
![Crear rama](../../images/pcr51/image-16.png)

#### Añadir fichero 2.txt
![Añadir fichero 2.txt](../../images/pcr51/image-17.png)

#### Crear rama remota v0.2
![Comandos para crear la rama remota](../../images/pcr51/image-18.png)

![Repositorio remoto con 2.txt](../../images/pcr51/image-19.png)

#### Merge directo
##### Parte 1

![Creamos fichero para commit directo](../../images/pcr51/image-24.png)

##### Parte 2

![Commit directo](../../images/pcr51/image-25.png)


#### Merge con conflicto
##### Parte 1
En la rama *master* poner *Hola* en el fichero *1.txt* y hacer commit
![Parte 1 merge con conflicto](../../images/pcr51/image-20.png)

##### Parte 2
Posicionarse en la rama *v0.2* y poner *Adios* en el fichero "1.txt" y hacer commit.
![Parte 2 merge con conflicto](../../images/pcr51/image-21.png)

##### Parte 3
Posicionarse de nuevo en la rama *master* y hacer un merge con la rama *v0.2*
![Conflicto](../../images/pcr51/image-22.png)

#### Listado de ramas
![Imagen del listado de todas las ramas](../../images/pcr51/image-26.png)

##### Ramas con merge

![Imagen del listado de ramas con merge](../../images/pcr51/image-27.png)

##### Ramas sin merge

![Imagen del listado de ramas sin merge](../../images/pcr51/image-28.png)

#### Arreglar conflicto
```
<<<<<<<<
Hola
============
Adios
>>>>>>>>
```

![Arreglo del conflicto](../../images/pcr51/image-23.png)

#### Borrar rama
##### Crea un tag v0.2
![Tag v0.2](../../images/pcr51/image-29.png)

##### Borrar rama v0.2
![Borrado de rama](../../images/pcr51/image-30.png)

#### Listado de cambios
![Listado de cambios](../../images/pcr51/image-31.png)

## Ejercicios (II)
### Creación y actualización de repostorios
#### Ejercicio 1
Configurar Git definiendo el nombre del usuario, el correo electrónico y activar el coloreado de la salida.
Mostrar la configuración final.

![Final configuration](../../images/pcr51/image-41.png)


#### Ejercicio 2
Crear un repositorio nuevo con el nombre libro y mostrar su contenido.
![Crear repositorio local y mostrar contenido](image-42.png)

#### Ejercicio 3

Comprobar el estado del repositorio.
![Estado antrs de crear fichero](image-43.png)

Crear un fichero indice.txt con el siguiente contenido:

```
Capítulo 1: Introducción a Git
Capítulo 2: Flujo de trabajo básico
Capítulo 3: Repositorios remotos
```
![Crear fichero indice.txt](image-44.png)

Comprobar de nuevo el estado del repositorio.
![Estado después de crear fichero](image-45.png)

Añadir el fichero a la zona de intercambio temporal.
![Añadir fichero al stage](image-46.png)

Volver a comprobar una vez más el estado del repositorio.
![Estado con el fichero en el stage](image-47.png)

#### Ejercicio 4
Realizar un commit de los últimos cambios con el mensaje “Añadido índice del libro.” y ver el estado del repositorio.
![Commit de los cambios](image-48.png)

#### Ejercicio 5
Cambiar el fichero indice.txt para que contenga lo siguiente:
```
Capítulo 1: Introducción a Git
Capítulo 2: Flujo de trabajo básico
Capítulo 3: Gestión de ramas
Capítulo 4: Repositorios remotos
```
![Cambio en el fichero indice.txt](image-49.png)

Mostrar los cambios con respecto a la última versión guardada en el repositorio.
![Comando git diff](image-50.png)

Hacer un commit de los cambios con el mensaje “Añadido capítulo 3 sobre gestión de ramas”.
![Commit con los cambios](image-51.png)

Sobra el comando git diff aquí, es para comprobar

#### Ejercicio 6
Mostrar los cambios de la última versión del repositorio con respecto a la anterior.
![git show para mostrar los cambios](image-52.png)

Cambiar el mensaje del último commit por “Añadido capítulo 3 sobre gestión de ramas al índice.”
![Cambiar mensaje del commit con --amend](image-53.png)

Volver a mostrar los últimos cambios del repositorio.
![git show con el commit cambiado](image-54.png)


### Manejo del historial de cambios
#### Ejercicio 1

**Mostrar el historial de cambios del repositorio.**
![Mostrar historial con git log](image-88.png)

**Crear la carpeta capitulos y crear dentro de ella el fichero capitulo1.txt con el siguiente texto.**

`Git es un sistema de control de versiones ideado por Linus Torvalds.`
Git es un sistema de control de versiones ideado por Linus Torvalds.

![Crear carpeta y fichero capitulo1.txt](image-89.png)

**Añadir los cambios a la zona de intercambio temporal.**
![Añadir cambios al stage](image-90.png)

**Hacer un commit de los cambios con el mensaje _“Añadido capítulo 1.”_ Volver a mostrar el historial de cambios del repositorio.**
![Commit hecho](image-91.png)
![Último cambio del historial](image-92.png)

#### Ejercicio 2
**Crear el fichero `capitulo2.txt` en la carpeta capitulos con el siguiente texto.**

`El flujo de trabajo básico con Git consiste en: 1- Hacer cambios en el repositorio. 2- Añadir los cambios a la zona de intercambio temporal. 3- Hacer un commit de los cambios.`

![Añadir capitulo2.txt](image-93.png)

**Añadir los cambios a la zona de intercambio temporal.**

![Añadir los cambios](image-94.png)

**Hacer un commit de los cambios con el mensaje _“Añadido capítulo 2.”_**

![Commit de los cambios](image-95.png)

**Mostrar las diferencias entre la última versión y dos versiones anteriores.**

#### Ejercicio 3
**Crear el fichero capitulo3.txt en la carpeta capitulos con el siguiente texto.**

`Git permite la creación de ramas lo que permite tener distintas versiones del mismo proyecto y trabajar de manera simultanea en ellas.`

**Añadir los cambios a la zona de intercambio temporal.**

**Hacer un commit de los cambios con el mensaje _“Añadido capítulo 3.”_**

**Mostrar las diferencias entre la primera y la última versión del repositorio.**

#### Ejercicio 4
**Añadir al final del fichero `indice.txt` la siguiente línea:**

`Capítulo 5: Conceptos avanzados`

**Añadir los cambios a la zona de intercambio temporal.**

**Hacer un commit de los cambios con el mensaje “Añadido capítulo 5 al índice.”.**

**Mostrar quién ha hecho cambios sobre el fichero `indice.txt`.**

### Deshacer cambios
#### Ejercicio 1

**Eliminar la última línea del fichero `indice.txt` y guardarlo.**
![Eliminar linea en richero](image-55.png)

**Comprobar el estado del repositorio.**
![Estado antes de deshacer cambio](image-56.png)

**Deshacer los cambios realizados en el fichero `indice.txt` para volver a la versión anterior del fichero.**
![Deshacer los cambios de indice.txt](image-57.png)

**Volver a comprobar el estado del repositorio.**
![Comprobar estado y fichero tras deshacer los cambios](image-58.png)

#### Ejercicio 2
**Eliminar la última línea del fichero `indice.txt` y guardarlo.**
![Eliminar ultima linea ej2](image-59.png)

**Añadir los cambios a la zona de intercambio temporal.**
![Añadir cambios al stage](image-60.png)

**Comprobar de nuevo el estado del repositorio.**
![Comprobamos estado en ej2-b-2](image-61.png)

**Quitar los cambios de la zona de intercambio temporal, pero mantenerlos en el directorio de trabajo.**
![Quitar los cambios del stage](image-62.png)

**Comprobar de nuevo el estado del repositorio.**
![Estado del repo después de quitarlo](image-63.png)

**Deshacer los cambios realizados en el fichero `indice.txt` para volver a la versión anterior del fichero.**
![Deshecho los cambios del directorio de trabajo](image-64.png)

**Volver a comprobar el estado del repositorio.**
![Estado del repo después de los cambios deshechosy si](image-65.png)

#### Ejercicio 3
**Eliminar la última línea del fichero `indice.txt` y guardarlo.**
![Eliminar ultima linea indice.txt](image-66.png)

**Eliminar el fichero `capitulos/capitulo3.txt`.**
![Eliminar fichero capitulos/capitulo3.txt](image-67.png)

**Añadir un fichero nuevo `capitulos/capitulo4.txt` vacío.**
![Añadir fichero capitulo4.txt](image-68.png)

**Añadir los cambios a la zona de intercambio temporal.**
![Añadir los cambios al stage](image-69.png)

**Comprobar de nuevo el estado del repositorio.**
![Comprobar estado del repositorio después de los cambios del ej2-c-3](image-70.png)

**Quitar los cambios de la zona de intercambio temporal, pero mantenerlos en el directorio de trabajo.**
![Cambios eliminados del stage](image-71.png)

**Comprobar de nuevo el estado del repositorio.**
![Estado del repositorio después de eliminar los cambio del stage](image-72.png)

**Deshacer los cambios realizados para volver a la versión del repositorio.**
![Cambios deshechos del directorio de trabajo](image-73.png)


**Volver a comprobar el estado del repositorio.**
![Cambios después de deshacer todo](image-74.png)

Algo a tener en cuenta es que el fichero no lo elimina debido a que es un archivo nuevo, para solucionar esto simplemente
usamos el comando `git clean`, junto a los parámetros: 

* `-f`: fuerza el borrado, obligatorio por defecto.
* `-d`: muestra que archivos va a borrar, recomendado ejecutar el comando antes con -d para comprobar que borrará y después ejecutarlo sin este para borrar los archivos si nos interesa.

![Borrado de los archivos sin seguimiento](image-75.png)

#### Ejercicio 4
**Eliminar la última línea del fichero `indice.txt` y guardarlo.**
![Borrado de la última línea del fichero](image-76.png)

**Eliminar el fichero `capitulos/capitulo3.txt`.**
![Borrado del fichero capitulo3.txt](image-77.png)

**Añadir los cambios a la zona de intercambio temporal y hacer un commit con el mensaje _“Borrado accidental.”_**
![Borrado de archivos añadidos y commit del cambio](image-78.png)

**Comprobar el historial del repositorio.**

Se comprueba el historial usando `git log`.
![Comprobar historial con git log](image-79.png)

**Deshacer el último commit pero mantener los cambios anteriores en el directorio de trabajo y la zona de intercambio temporal.**

Para esto debemos obtener el hash del cambio que queremos revertir, usando el comando anterior, tras eso lo copiamos y lo pegamos en el argumento del comando `git revert`
El parámetro `-n` en el comando `git revert` permite revertir un commit sin que se haga automáticamente un commit nuevo con los archivos revertidos.

![Deshechos los cambios del commit](image-80.png)

**Comprobar el historial y el estado del repositorio.**
![Historial de cambio](image-81.png)
![Estado del repositorio](image-82.png)

**Volver a hacer el commit con el mismo mensaje de antes.**
![Commit de los cambios revertidos](image-83.png)

**Deshacer el último commit y los cambios anteriores del directorio de trabajo volviendo a la versión anterior del repositorio.**
![Deshacer commit de nuevo](image-84.png)
![Mensaje del commit automático](image-85.png)
![Cambios realizados](image-86.png)

**Comprobar de nuevo el historial y el estado del repositorio.**
![Comprobamos historial y estado del repositorio](image-87.png)

### Gestión de ramas
#### Ejercicio 1
**Crear una nueva rama bibliografia y mostrar las ramas del repositorio.**

#### Ejercicio 2
**Crear el fichero capitulos/capitulo4.txt y añadir el texto siguiente**

**En este capítulo veremos cómo usar GitHub para alojar repositorios en remoto.**

**Añadir los cambios a la zona de intercambio temporal.**

**Hacer un commit con el mensaje _“Añadido capítulo 4.”_**

**Mostrar la historia del repositorio incluyendo todas las ramas.**

#### Ejercicio 3
**Cambiar a la rama bibliografia.**

**Crear el fichero bibliografia.txt y añadir la siguiente referencia**

`Chacon, S. and Straub, B. Pro Git. Apress.`

**Añadir los cambios a la zona de intercambio temporal.**

**Hacer un commit con el mensaje _“Añadida primera referencia bibliográfica.”_**

**Mostrar la historia del repositorio incluyendo todas las ramas.**

#### Ejercicio 4
**Fusionar la rama bibliografia con la rama master.**

**Mostrar la historia del repositorio incluyendo todas las ramas.**

**Eliminar la rama bibliografia.**

**Mostrar de nuevo la historia del repositorio incluyendo todas las ramas.**

#### Ejercicio 5
**Crear la rama bibliografia.**

**Cambiar a la rama bibliografia.**

**Cambiar el fichero `bibliografia.txt` para que contenga las siguientes referencias:**

```
Scott Chacon and Ben Straub. Pro Git. Apress.
Ryan Hodson. Ry’s Git Tutorial. Smashwords (2014)
```

**Añadir los cambios a la zona de intercambio temporal y hacer un commit con el mensaje _“Añadida nueva referencia bibliográfica.”_**

**Cambiar a la rama master.**

**Cambiar el fichero `bibliografia.txt` para que contenga las siguientes referencias:**

```
Chacon, S. and Straub, B. Pro Git. Apress.
Loeliger, J. and McCullough, M. Version control with Git. O’Reilly.
```

**Añadir los cambios a la zona de intercambio temporal y hacer un commit con el mensaje _“Añadida nueva referencia bibliográfica.”_**

**Fusionar la rama bibliografia con la rama master.**

**Resolver el conflicto dejando el fichero `bibliografia.txt` con las referencias:**

```
Chacon, S. and Straub, B. Pro Git. Apress.
Loeliger, J. and McCullough, M. Version control with Git. O’Reilly.
Hodson, R. Ry’s Git Tutorial. Smashwords (2014)
```

**Añadir los cambios a la zona de intercambio temporal y hacer un commit con el mensaje _“Resuelto conflicto de bibliografía.”_**

**Mostrar la historia del repositorio incluyendo todas las ramas.**

### Repositorios remotos

