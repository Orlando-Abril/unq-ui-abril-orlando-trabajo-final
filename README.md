# Palabras Encadenadas

Aplicación web desarrollada en React para el Trabajo Final Integrador de la materia Construcción de Interfaces de Usuario de la Universidad Nacional de Quilmes.

El objetivo del juego es construir la cadena más larga posible de palabras válidas en español antes de que finalice el tiempo.

## Descripción

La partida comienza cuando el jugador ingresa la primera palabra válida. A partir de ese momento, cada nueva palabra debe cumplir las reglas del juego:

- Debe existir en el diccionario español.
- No puede haber sido utilizada anteriormente en la misma partida.
- Debe comenzar con la última letra de la palabra válida anterior.

Cada palabra válida suma un punto por cada letra. El jugador dispone de 15 segundos por turno y el contador se reinicia únicamente cuando ingresa una palabra válida.

## Cómo jugar

Clonar el repositorio:

```bash
git clone https://github.com/Orlando-Abril/unq-ui-abril-orlando-trabajo-final.git
cd unq-ui-abril-orlando-trabajo-final
```

Instalar dependencias:

```bash
npm install
```

Levantar la aplicación:

```bash
npm run dev
```

Luego abrir en el navegador la URL que muestra Vite, normalmente:

```txt
http://localhost:5173
```

## Tecnologías

- React
- Vite
- JavaScript
- CSS

## API utilizada

La validación de palabras se realiza mediante la API provista por la cátedra:

```txt
GET https://word-api-hmlg.vercel.app/api/validate?word=<palabra>
```g