#!/usr/bin/env -S kotlinc -script
// los scripts en kotlin se corren con kotlinc -script y tienen que terminar en .kts
import java.io.File

// leemos los argumentos que le pasan al programa
val rutaALasRespuestas = args[0]
val respuestas = File(rutaALasRespuestas).readLines()

// el while True es para que el programa nos vuelva a preguntar en vez de terminar
while(true) {
   // usamos stdout para mostrar cosas por la consola
   println("Preguntá algo:")
   print("> ")

   // Esta linea es necesaria porque si no el "> " no se iba a imprimir
   // por pantalla hasta despues de pedir input al usuario :(
   System.out.flush()
  
   // y usamos stdin para leer la entrada
   val pregunta = readLine()
   // agregamos una forma de salir del while para terminar el programa
   if(pregunta == "salir") {
       println("Hasta luego!")
       break
   }

   val respuesta = respuestas.random()
   println(respuesta)
}