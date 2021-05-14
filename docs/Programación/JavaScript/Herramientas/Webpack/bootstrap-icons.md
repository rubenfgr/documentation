---
title: "Bootstrap Icons"
---

- **Instalaciones**

  ```sh
  npm i bootstrap-icons
  npm i file-loader --save-dev
  ```

- **webpack.config.js**

  ```js
  module: {
    rules: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(
          __dirname,
          "./node_modules/bootstrap-icons/font/fonts"
        ),
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "webfonts",
            publicPath: "../webfonts",
          },
        },
      },
    ];
  }
  ```

- **app.js**

  ```js
  require("bootstrap-icons/font/bootstrap-icons.css");
  ```

- **Uso**

  ```html
  <i class="bi-alarm"></i>
  ```
