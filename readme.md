
# ejecutar:  nodemon dev

# AUTH



               
# Consultas

* Iniciar sesion
          - SELECT id_usuario, rol FROM credenciales WHERE usuario = 'Usuario1' AND contrasenia ='123456'


# docente
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
- Con esta consulta se crear un registro de un archivo cargado
```sql
INSERT INTO `archivo`(`id_actividad`, `peso`, `formato`, `nombre`, `ruta`) VALUES ('2','200','jpg','archivo','https://google.com')
```




# estudiante 
- Consulta para obtener los datos del estudiante
```sql
SELECT * FROM `estudiante` WHERE id_estudiante = '042U';
```
- Consulta para obetener las asignaturas que ve ese estudiante para eso necesitamos el id del grupo del estudiante
```sql
SELECT * FROM grupo NATURAL JOIN grados NATURAL JOIN asignadas NATURAL JOIN asignaturas WHERE id_grupo = '001g'
 ```
- Consulta para obtener las actividades asignadas
 ```sql
SELECT * FROM asigna NATURAL JOIN ensenia NATURAL JOIN asignaturas WHERE id_grupo = '001g' ;
 ```

 - Consulta par obtener la actvidad asignada
 ```sql
 SELECT * FROM actividad WHERE id_actividad = 1 ;
 ```



 # Endpoints 
   - POST: localhost:3000/school/sigin
      - body 
               
         ```JSON
          {
               "usuario":"Usuario1",
               "contrasenia":"123456"
          }
          ```


GET:  localhost:3000/school/docente/id
