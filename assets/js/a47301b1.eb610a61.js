(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(120)),i={title:"Temperatura ventilador"},c={unversionedId:"IoT & Maker/Raspberry PI/temperatura-ventilador",id:"IoT & Maker/Raspberry PI/temperatura-ventilador",isDocsHomePage:!1,title:"Temperatura ventilador",description:"- 1\xba Script. Habilitar el PIN GPIO del ventilador en cada reinicio",source:"@site/docs/IoT & Maker/Raspberry PI/temperatura-ventilador.md",sourceDirName:"IoT & Maker/Raspberry PI",slug:"/IoT & Maker/Raspberry PI/temperatura-ventilador",permalink:"/documentation/IoT & Maker/Raspberry PI/temperatura-ventilador",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/IoT & Maker/Raspberry PI/temperatura-ventilador.md",version:"current",frontMatter:{title:"Temperatura ventilador"},sidebar:"tutorialSidebar",previous:{title:"Raspbian VS DietPI",permalink:"/documentation/IoT & Maker/Raspberry PI/raspbian-vs-dietpi"},next:{title:"Referencia",permalink:"/documentation/Microservicios/Docker/0referencia"}},p=[],s={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"1\xba Script. Habilitar el PIN GPIO del ventilador en cada reinicio")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n###########################################################################\n### References:\n### I/O Control:\n### http://www.instructables.com/id/Control-Stuff-with-your-Raspberry-Pi-GPIO/?ALLSTEPS\n### http://www.raspberrypi.org/forums/viewtopic.php?p=131069&sid=88282aaa50634ad7db83c3965625c033#p131069\n###\n###########################################################################\n### Replace with your correct GPIO number\nfor pin in 17; do\ngpio write $pin 0\ngpio export $pin out\ndone\nexit 0\n")),Object(o.b)("p",{parentName:"li"},"Para hacer ejecutable este archivo, utilizamos este comando:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"chmod u+x OnReboot.sh\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"2\xba Script. Se encargar\xe1 de controlar el puerto GPIO donde tienes conectado el ventilador, llamaremos a este archivo Thermostat.sh")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n###########################################################################\n### References:\n### I/O Control:\n### http://www.instructables.com/id/Control-Stuff-with-your-Raspberry-Pi-GPIO/?ALLSTEPS\n### http://www.raspberrypi.org/forums/viewtopic.php?p=131069&sid=88282aaa50634ad7db83c3965625c033#p131069\n###\n### bash if/then\n### http://www.thegeekstuff.com/2010/06/bash-if-statement-examples/\n### http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-6.html\n### http://www.dreamsyssoft.com/unix-shell-scripting/ifelse-tutorial.php\n###\n### bash sleep ()\n### http://www.cyberciti.biz/faq/linux-unix-sleep-bash-scripting/\n###########################################################################\n#\nSoCTemp="`sudo /opt/vc/bin/vcgencmd measure_temp | tr -d "=temp.\'C"`"\n# SoCTemp=300 # Enable this line for debugging\nLowLimit=490\nHighLimit=510\n#\necho "Low Limit :"$LowLimit\necho "High Limit:"$HighLimit\necho "SoC Temp  :"$SoCTemp\n## echo "1" > /sys/class/gpio/gpio17/value\n###########################################################################\nif [ $SoCTemp -le $HighLimit ]; then\n   ### Turn on GPIO 21 off:\n   echo "SoC is cool($SoCTemp), Turning off the fan in 20 seconds ..."\n   sleep 20 ; echo "0" > /sys/class/gpio/gpio17/value\n   echo "Done!"\n   exit 0\nfi\nif [ $SoCTemp -ge $LowLimit ]; then\n   ### Turn on GPIO 21 on:\n   echo "SoC is getting hot ($SoCTemp), Turning on the fan now!"\n   echo "1" > /sys/class/gpio/gpio17/value\n   echo "Done!"\n   exit 0\nfi\n')),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Asignar permisos de ejecuci\xf3n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"chmod u+x Thermostat.sh\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Indicar al programador de tareas cron cuando utilizar cada script")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"@reboot /home/pi/OnReboot.sh &\n*/1 * * * * /home/pi/Thermostat.sh &\n")))),Object(o.b)("p",null,"Luego del siguiente reinicio, se ejecutar\xe1 el archivo OnReboot.sh otorgando las permisolog\xedas y el archivo Thermostat.sh se ejecutar\xe1 cada minuto en el background, controlando el encendido y apagado del ventilador."),Object(o.b)("p",null,"Ajustar las temperaturas de umbral puede ser retador, no te asustes, ese es el comportamiento esperado en un sistema de control On-Off simple :D"),Object(o.b)("p",null,"Nota: Siempre hay mas de una forma para asar un conejo, as\xed que seguramente existen formas m\xe1s f\xe1ciles o efectivas para atacar este problema ;)"),Object(o.b)("p",null,"Suerte y nos comentas como te fue!"))}l.isMDXComponent=!0},120:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);