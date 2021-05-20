---
title: 'Matar procesos de Node'
---

## Matar todos los procesos

```sh
pkill -f node
pkill -f nodejs
killall node
```

## Matar procesos individuales

```sh
# Buscar/filtrar
netstat -nlp | grep node
# Matar proceso
kill 3008
kill -9 3008 # Forzado
```