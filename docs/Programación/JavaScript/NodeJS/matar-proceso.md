---
title: 'Matar procesos de Node'
---

## Windows

### Listar procesos

```sh
tasklist
```

### Matar todos los procesos de Node

```sh
taskkill /F /IM node.exe
```

### Matar proceso por PID

```sh
taskkill /F /PID 3592
```

## Linux

### Matar todos los procesos

```sh
pkill -f node
pkill -f nodejs
killall node
```

### Matar procesos individuales

```sh
# Buscar/filtrar
netstat -nlp | grep node
# Matar proceso
kill 3008
kill -9 3008 # Forzado
```