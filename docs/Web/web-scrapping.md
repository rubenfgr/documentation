---
title: "Web Scrapping"
---

Técnicas Anti-Scraping: [https://www.octoparse.es/blog/5-tecnicas-anti-scraping](https://www.octoparse.es/blog/5-tecnicas-anti-scraping)

## Descargar una página

```sh
wget -O- https://www.lavozdealmeria.com/
```

## Herramientas HTML XML UTILS

> sudo apt install html-xml-utils

- **Obtener en formato XML y filtrar por selectores**

```sh
hxnormalize -x https://www.lavozdealmeria.com/ | hxselect -i ".footer_firma"
hxnormalize -x https://www.lavozdealmeria.com/ | hxselect -i "#test"
hxnormalize -x https://www.lavozdealmeria.com/ | hxselect -i "test"
```
