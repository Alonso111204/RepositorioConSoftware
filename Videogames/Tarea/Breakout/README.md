# Breakout Game

## Descripción

Este proyecto es una implementación del juego Breakout utilizando JavaScript.
El jugador controla una paleta que rebota una pelota para destruir bloques en la parte superior de la pantalla.

El juego incluye mejoras al gameplay como bloques especiales que dan habilidades temporales.

---

## Cómo ejecutar el juego

1. Descarga o clona este repositorio.
2. Abre la carpeta del proyecto.
3. Abre el archivo Breakout.html

---

## Controles

Tecla "a" - Mover paleta a la izquierda 
Tecla "d" - Mover paleta a la derecha 
Tecla "Espacio" - Lanzar la pelota / Reiniciar juego

---

## Reglas del juego

* La pelota rebota en la paleta y en los bordes.
* Si la pelota cae al fondo:
  * Pierdes una vida.
  * La pelota se reinicia.
* El juego termina cuando:
  * Te quedas sin vidas (Game Over).
* Ganas cuando:
  * Destruyes todos los bloques (You Won).

---

## Objetivo

Destruir todos los bloques sin perder todas tus vidas.

---

## Cambios al gameplay (Power-ups)

Se añadieron bloques especiales que modifican la experiencia del juego de forma aleatoria (%10 de probabilidad que un bloque tenga powerup con un limite de 3 verdes y 2 amarillos):

* Bloques verdes - Otorgan una vida al romperlos.
* Bloques amarillos - La paleta se agranda durante 10 segundos.

---

## Autor

Alonso Arechiga Mendoza