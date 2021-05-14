---
title: "Inicio TypeScript"
---

## Inicio de un proyecto con TypeScript

1. Iniciar un proyecto de NodeJS

   ```sh
    npm init -y
   ```

2. Iniciar archivo de configuración de TypeScript

    ```sh
    # Se debe tener instalado typescript globalmente
    npm i -g typescript
    # Iniciar el archivo de configuración
    tsc --init
    ```

3. Instalar y configurar TSLint

    ```sh
    # Instalar tslint y typescript como dependencias de desarrollo
    npm i --save-dev tslint
    npm i --save-dev typescript
    # Iniciar el fichero de configuración de TSlint
    ./node_modules/.bin/tslint --init
    ```

    **Agregar en el fichero de configuración:**

    Evita la salida por consola

    ```json
    "rules": {
        "no-console": false
    }
    ```
