
# AJUSTES INCICALES:  
 - Ejecutar: nodemon dev
 - Levantar Xampp

# AUTH



               
# Consultas

* Iniciar sesion
          - SELECT id_usuario, rol FROM credenciales WHERE usuario = 'Usuario1' AND contrasenia ='123456'


# docente
 - Esta consulta obtiene los grados donde el docent da clase clase
    ```sql  
    consulta 1
      <!-- SELECT * FROM (grados NATURAL JOIN grupo) INNER JOIN ensenia WHERE id_grado = '006G' AND ensenia.id_docente = '001U' AND ensenia.id_grupo = grupo.id_grupo GROUP BY(grupo.id_grupo); -->
   consulta 2
     SELECT grado, posicion FROM (ensenia INNER JOIN grupo) NATURAL JOIN grados WHERE ensenia.id_docente = '001U' AND ensenia.id_grupo = grupo.id_grupo and grados.id_grado='010G'GROUP BY (ensenia.id_grupo);
   ```  
 - Con esta cosulta se obtiene las asignaturas asignadas por docente  
```sql
     SELECT asignaturas.nombre FROM asignaturas NATURAL JOIN ensenia WHERE ensenia.id_docente = '001U' GROUP BY(asignaturas.nombre);
```
- Con esta consulta se obtiene la lista de los estudiantes por grado
```sql
   SELECT id_usuario, nombres, apellidos, identificacion, sexo FROM estudiante NATURAL JOIN usuario WHERE estudiante.id_grupo = '001g' AND estudiante.id_estudiante = usuario.id_usuario;
```
- Con esta consulta se crea una actividad
```sql
  INSERT INTO `actividad`( `id_periodo`, `descripcion`) VALUES 
('001P','esta es una actividad')
```
- Con esta consulta se crear asigna la actividad  aun grupo
```sql
INSERT INTO asigna(id_actividad, id_grupo, id_docente, fecha_inicial, fecha_limite) VALUES (?,?,?,?,?)

```
- Con esta consulta se crear un registro de un archivo
```sql
INSERT INTO `archivo`(`id_actividad`, `peso`, `formato`, `nombre`, `ruta`) VALUES (?,?,?,?,?)

```

```sql
   con esta consulta se obtiene el grado
SELECT grado FROM grados WHERE id_grado
```
 ``` sql
      con esta consulta se obtiene el grupo y su posicion de acuerdo al grado
SELECT grado, posicion FROM grados NATURAL JOIN grupo WHERE id_grupo=? AND id_grado = ?;

 ```
 ```sql
     Esta consulta obtiene el nombre de la asignatura que da el docente de acuerdo al grupo
      SELECT nombre FROM ensenia NATURAL JOIN asignaturas WHERE ensenia.id_docente = ? AND ensenia.id_grupo = ?;

 ```




# estudiante 
- Consulta para obtener los datos del estudiante
```sql
SELECT * FROM `estudiante` WHERE id_estudiante = '042U';
```
- Consulta para obetener las asignaturas que ve ese estudiante para eso necesitamos el id del grupo del estudiante
```sql
SELECT * FROM grupo NATURAL JOIN grados NATURAL JOIN asignadas NATURAL JOIN asignaturas WHERE id_grupo = '001g' -- Vieja
SELECT nombre FROM asignadas NATURAL JOIN asignaturas WHERE asignadas.id_grado IN (SELECT id_grado FROM grupo NATURAL JOIN grados WHERE grupo.id_grupo = '001g' GROUP BY (id_grado));
-- nueva
 ```
- Consulta para obtener las actividades asignadas
 ```sql
SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = '001g' ;
 ```

 - Consulta par obtener la actvidad asignada
 ```sql
 SELECT * FROM actividad WHERE id_actividad = 1 ;
 ```
 - 



 # Endpoints 
 # GET
- Obtiene las asignaturas que imparte el docente
`GET`:  localhost:3000/school/docente/id

 - Obtiene los grados donde el docente da clase
 localhost:3000/school/grado/001U/
 - obtiene los grupos donde el docente da clases por grado
 localhost:3000/school/grado/001U/006G

# POST
   -  para iniciar sesion
   `POST`: localhost:3000/school/sigin
      - body 
               
         ```JSON
          {
               "usuario":"Usuario1",
               "contrasenia":"123456"
          }
          ```



- Crear actividad 
`POST`: localhost:3000/school/crear 
   - BODY:
   ```json
         {
            "id_periodo":"001P",
            "descripcion":"61244as2a1d1adsasaaaaaaaa fda",
            "id_grupo":"001g",
            "id_docente":"001U", 
            "fecha_inicial":"2000-12-14",
            "fecha_limite":"2000-12-12"
         }
   ```
 - añadir archivo 
  `POST`: localhost:3000/school/aniadirArchivo
     - BODY:
   ```json
         {
            "id_actividad":1,
            "peso":"10",
            "formato":"jpg",
            "nombre":"Activdidad",
            "ruta":"https://google.com"
         }
   ```
 - Crear un comentario
  `POST`: localhost:3000/school/comentario
     - BODY:
   ```json
         {
      "id_actividad":1,
      "id_usuario":"001U",
      "fecha":"2000-12-12",
      "contenido":"a"
         }
   ```


