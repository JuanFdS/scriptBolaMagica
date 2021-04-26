#!/usr/bin/env python
import sys
import random

# leemos los argumentos que le pasan al programa
archivo_de_respuestas = open(sys.argv[1])
respuestas = archivo_de_respuestas.readlines()
archivo_de_respuestas.close()

# el while True es para que el programa nos vuelva a preguntar en vez de terminar
while True:
   # usamos stdout para mostrar cosas por la consola
   print("Preguntá algo:")

   # y usamos stdin para leer la entrada
   pregunta = input(">")

   # agregamos una forma de salir del while para terminar el programa
   if(pregunta == "salir"):
       print("Hasta luego!")
       break

   respuesta = random.choice(respuestas)
   print(respuesta)
