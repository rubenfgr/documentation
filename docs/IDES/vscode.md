---
title: "VSCode"
---

---

## JSON

- Paste JSON as Code

---

## Anotaciones

- TODO Tree - TODO Highlight
- Bookmarks

---

## Visual

- Material Icon Theme
- Color Highlight. Muestra los colores sobre los códigos
- Bracket Pair Colorizer 2. Da color a los brackets { }

---

## General

- Path Intellisense
- Remote - WSL
- DotENV
- EditorConfig for VS Code
- Workspace Explorer

---

## Git / Github

- Gist
- GitLens - Git supercharge

---

## Arduino

- PlatformIO IDE

---

## HTML / CSS

- HTML CSS Support
- IntelliSense for CSS class names in HTML

### Bootstrap

- Bootstrap v4 and v5 snippets YEAR 2020
- Font Awesome Auto-complete & Preview

---

## JavaScript / TypeScript

- Live Server
- Better Comments
- Debugger for Chrome
- ESlint
- Import Cost
- JavaScript (ES6) snippets
- npm Intellisense
- Prettier - Code formatter
- Prettier ESlint
- Quokka.js
- View Node Package
- Wallaby.js

### Angular

- Angular Snippets (Version 11)
- Angular Language Service

---

## PHP

- phpfmt - PHP formatter
- PHP Intelephense [deshabilitar PHP Language Features]
- PHP Debug
- PHP Sniffer
- PHP Server

---

### Laravel

- Laravel Blade Snippets
- Laravel Snippets
- Laravel Blade Spacer
- Laravel Artisan
- Laravel Extra Intellisense
- laravel-goto-controller
- Laravel goto view
- Laravel Blade formatter

---

## Markdown

- Markdown All in One
- Markdown Preview Enhanced

---

## Cliente FTP

- **SFTP**

  1. CONTROL + , --> Activar Sftp: Download When Open In Remote Explorer

  2. Abrir la carpeta del proyecto
  3. CONTROL + SHIFT + P --> SFTP: Config

     ```json
     {
       "name": "My Server",
       "host": "rubenfgr.github.io",
       "protocol": "sftp",
       "port": 22,
       "username": "admin", // Vestar User
       "password": "121212", // Vesta Pass
       "uploadOnSave": true
     }
     ```

  4. Clic en la Nube de las opciones de la izquierda para ver abrir la carpeta en el servidor

  5. Es posible que se deban dar permisos sobre /emqx

     ```sh
     chown -R admin:admin /emqx
     ```
