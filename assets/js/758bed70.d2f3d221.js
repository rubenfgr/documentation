(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return o}));var r=t(3),n=(t(0),t(89));const i={title:"Referencia"},b={unversionedId:"Git/0referencia",id:"Git/0referencia",isDocsHomePage:!1,title:"Referencia",description:"DASH Y DOBLE DASH (- / --)",source:"@site/docs/Git/0referencia.md",sourceDirName:"Git",slug:"/Git/0referencia",permalink:"/documentation/Git/0referencia",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Git/0referencia.md",version:"current",frontMatter:{title:"Referencia"},sidebar:"tutorialSidebar",previous:{title:"Inicio",permalink:"/documentation/"},next:{title:"Consejos",permalink:"/documentation/Git/consejos"}},p=[{value:"DASH Y DOBLE DASH (- / --)",id:"dash-y-doble-dash------",children:[]},{value:"BUENAS PR\xc1CTICAS",id:"buenas-pr\xe1cticas",children:[]},{value:"CONFIGURACI\xd3N",id:"configuraci\xf3n",children:[]},{value:"AUTO-IDENTIFICACI\xd3N",id:"auto-identificaci\xf3n",children:[]},{value:"STATUS Y LOG",id:"status-y-log",children:[]},{value:"MODIFICACI\xd3N Y ELIMINACI\xd3N",id:"modificaci\xf3n-y-eliminaci\xf3n",children:[]},{value:"IGNORAR ARCHIVOS Y DIRECTORIOS",id:"ignorar-archivos-y-directorios",children:[]},{value:"STAGGING",id:"stagging",children:[]},{value:"COMMIT",id:"commit",children:[]},{value:"REMOTO",id:"remoto",children:[]},{value:"BRANCHS",id:"branchs",children:[]},{value:"TAG &amp; RELEASE",id:"tag--release",children:[]},{value:"VERSIONADO",id:"versionado",children:[]},{value:"ISSUES",id:"issues",children:[]},{value:"STASH WIP - Working In Progress",id:"stash-wip---working-in-progress",children:[]},{value:"REBASE",id:"rebase",children:[]},{value:"COMANDOS \xdaTILES",id:"comandos-\xfatiles",children:[]},{value:"ALIAS",id:"alias",children:[]},{value:"SSH",id:"ssh",children:[]},{value:"ERRORES COMUNES",id:"errores-comunes",children:[]}],l={toc:p};function o({components:e,...a}){return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"dash-y-doble-dash------"},"DASH Y DOBLE DASH (- / --)"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"- Una sola letra\n-- Una palabra\n")),Object(n.b)("h2",{id:"buenas-pr\xe1cticas"},"BUENAS PR\xc1CTICAS"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Realizar un fetch o pull antes de un push al repositorio"))),Object(n.b)("h2",{id:"configuraci\xf3n"},"CONFIGURACI\xd3N"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Configurar el usuario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git config --global user.name "RubenFGR"')),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git config --global user.email "rubenfgr87@outlook.com"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Editar estos par\xe1metros desde el archivo")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git config --global -e"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Listar la configuraci\xf3n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git config -l")))),Object(n.b)("h2",{id:"auto-identificaci\xf3n"},"AUTO-IDENTIFICACI\xd3N"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Evitar que git solicite el usuario y contrase\xf1a cada vez")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git config --global credential.helper store"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Lo mismo que el anterior mantendiendolo en memoria un tiempo limitado por seguridad")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git config --global credential.helper 'cache --timeout=3600'"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar esta configuraci\xf3n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"sudo rm ~/.git-credentials")))),Object(n.b)("h2",{id:"status-y-log"},"STATUS Y LOG"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver todo el historial de la l\xednea de tiempo")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git reflog"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver los \xfaltimos cambios despu\xe9s del \xfaltimo commit")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git diff"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver los cambios en el escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git diff --staged"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver diferencias entre dos ramas")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git diff "rama-uno" "rama-dos"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver el estado actual del repositorio")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git status"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"ver el estado actual del repositorio en formato corto")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git status -s"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"ver el estado actual del repositorio en formato corto y ramas")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git status -s -b"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver todos los cambios del repositorio (commits)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git log"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver los commits realizados a una l\xednea (hash corto y mensaje)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git log --oneline"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver los commits realizados de forma gr\xe1fica a una l\xednea y decorados")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git log --graph --oneline --decorate --all")))),Object(n.b)("h2",{id:"modificaci\xf3n-y-eliminaci\xf3n"},"MODIFICACI\xd3N Y ELIMINACI\xd3N"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Modificar el nombre de alg\xfan archivo")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git mv "nombreArchivoAntiguo" "nombreArchivoNuevo"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar un archivo")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git rm "nombreArchivo"')))),Object(n.b)("h2",{id:"ignorar-archivos-y-directorios"},"IGNORAR ARCHIVOS Y DIRECTORIOS"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Crear el fichero .gitignore en el ra\xedz"),Object(n.b)("li",{parentName:"ol"},"Ignorar directorio ",Object(n.b)("inlineCode",{parentName:"li"},".directorio/")),Object(n.b)("li",{parentName:"ol"},"Ignorar fichero ",Object(n.b)("inlineCode",{parentName:"li"},".fichero.txt")),Object(n.b)("li",{parentName:"ol"},"Ignorar varios por extension ",Object(n.b)("inlineCode",{parentName:"li"},"*.txt"))),Object(n.b)("p",null,'" Ignorar directorios o ficheros que ya estaban rastreados por git'),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Agregar los ficheros o directorios al .gitignore"),Object(n.b)("li",{parentName:"ol"},"Limpiar toda la cache de rastreo ",Object(n.b)("inlineCode",{parentName:"li"},"git rm -r --cached .")),Object(n.b)("li",{parentName:"ol"},"Limpiar un fichero o directorio concreto de la cache de rastreo ",Object(n.b)("inlineCode",{parentName:"li"},"git rm --cached .fichero.txt")),Object(n.b)("li",{parentName:"ol"},"Agregar los cambios al escenario ",Object(n.b)("inlineCode",{parentName:"li"},"git add .")),Object(n.b)("li",{parentName:"ol"},"Subir los cambios ",Object(n.b)("inlineCode",{parentName:"li"},'git push origin "rama"'))),Object(n.b)("h2",{id:"stagging"},"STAGGING"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agrega todos los archivos modificados al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add . ")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add --all")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add -- ."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar los archivos dentro de la carpeta al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add carpeta/"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar todos los archivos del directorio actual .png")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add *.png")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add carpeta/*.pdf"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agrega todo jerarquicamente al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add -A"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar todos los archivo .txt del proyecto al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git add "*.txt"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar la lista de archivo al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git add "lista de archivos"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar todo con actualizaci\xf3n (-u (update))")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add -u"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar del escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git reset "nombreFichero | nombreCarpeta"')),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git reset HEAD "nombreFichero"')))),Object(n.b)("h2",{id:"commit"},"COMMIT"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Los commits se pueden referenciar en GitHub a trav\xe9s de su Hash")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"HEAD apunta al \xfaltimo commit realizado"),Object(n.b)("li",{parentName:"ul"},"HEAD^ apunta al pen\xfaltimo commit realizado"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar archivos al escenario y realizar el commit")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git commit -am "mensaje"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Modificar el \xfaltimo commit y cambiar el mensaje")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git commit --amend -m "nuevo mensaje"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Deshacer un commit sin borrar los archivos (s\xf3lo \xfaltimo commit), reset tiene 3 niveles de borrado, el siguiente es el m\xe1s debil")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git reset --soft HEAD~1"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Moverse a un punto de la historia (commit) con su hash guardando los cambios superiores")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git reset --mixed "hash"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Moverse a un commit con eliminando todo lo superior a el")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git reset --hard "hash"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Vuelve el estado del repositorio al \xfaltimo commit")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git checkout -- ."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Vuelve un archivo al estado que tenia en el \xfaltimo commit")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git checkout -- "nombre-archivo"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Vuelve un archivo a su estado en un commit espec\xedfico")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git checkout "id-commit" "nombre-archivo"')))),Object(n.b)("h2",{id:"remoto"},"REMOTO"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar un repositorio remoto en la ubicaci\xf3n actual")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git remote add origin "url-repositorio"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver cambios de un repositorio principal sin ser colaboradores")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git remote add upstream "repo original"')),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git fetch upstream"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Revisar las fuentes remotas agregadas al repositorio, los repositorios remotos para push y fetch pueden ser distintos")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git remote -v"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Clonar el repositorio en el directorio actual")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git clone "url-repositorio"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Clonar y poner nombre al directorio")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git clone "url-repositorio" "nombre-repositorio"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Subir los cambios a remoto")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git push origin master"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Enviar cambios al repositorio remoto, -u Ayuda a que la pr\xf3xima vez que queramos hacer push NO necesitemos especificar la rama")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git push -u origin master")))),Object(n.b)("h2",{id:"branchs"},"BRANCHS"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver las ramas actuales")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git branch"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver todas las ramas, incluidas las remotas")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git branch -a"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregar una rama nueva")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git branch "nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Cambiar de rama")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git checkout "nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Cambiar de rama creandola porque no existe")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git checkout -b "nombre-rama-nueva"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Fusionar ramas integrando codigo de una rama dentro de otra, colocarse en la rama donde se desean fusionar los cambios")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git merge "nombre-rama-a-fusionar"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Limpiar ramas que ya est\xe1n funsionadas y no sirven para nada")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git branch -d "nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"El -d no siempre funciona ya que comprueba que no siempre vallas a perder trabajo, es decir, que los commit de la rama a eliminar est\xe9n en master. Para obligar el borrado de la rama se utiliza -D (en may\xfascula)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git branch -D "nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar una rama remota despues de comprobar con branch -a")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git push origin :"nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},'Eliminar ramas de seguimiento remoto obsoletas en "nombre"')),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git remote prune "nombre-remoto"')),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git remote prune "nombre-remoto" --dry-run (no las elimina)'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Realmente, los commit que hab\xeda en esa rama no se eliminan. Git usa un recolector de basura de vez en cuando para borrar commits antiguos. En caso de borrar archivos binarios muy grandes ser\xe1 necesario llamar al gc de git expl\xedcitamente con")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git gc")))),Object(n.b)("h2",{id:"tag--release"},"TAG & RELEASE"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear un tag")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git tag "nombre-tag"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear un tag con anotaci\xf3n de versi\xf3n + mensaje")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git tag -a v1.0.0 -m "Versi\xf3n 1.0.0"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear un tag sobre un commit a trav\xe9s de su hash")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git tag -a v.0.1.0 "hash-commit" -m "Mensaje a mostrar"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear un tag m\xe1s elaborado")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git tag -a "version" "hash-commit"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver los tag del repositorio")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git tag"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar un tag")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git tag -d "nombre-tag"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver informaci\xf3n de un tag espec\xedfico")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git show "tag"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Subir los tags al repositorio")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git push --tags")))),Object(n.b)("h2",{id:"versionado"},"VERSIONADO"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"v1.0.0"),Object(n.b)("li",{parentName:"ul"},"Mayor.Menor.Parche"),Object(n.b)("li",{parentName:"ul"},"M\xe1s informaci\xf3n acerca del versionado: ",Object(n.b)("a",{parentName:"li",href:"https://semver.org/"},"semver.org"))),Object(n.b)("h2",{id:"issues"},"ISSUES"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Cerrar un Issue con un commit (fixes, closes, resolves)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git commit -am "mensaje... fixes|closes|resolves #"num-issue""')))),Object(n.b)("h2",{id:"stash-wip---working-in-progress"},"STASH ","[WIP - Working In Progress]"),Object(n.b)("p",null,"El stash se utiliza para guardar el trabajo actual en el tiempo y poder volver a el # en cualquier momento"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git stash ")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git stash save")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'git stash save "mensaje a mostrar"')),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver todos los trabajos en progreso que hay")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash list"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Igual a la anterior con m\xe1s informaci\xf3n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash list --stat"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver informaci\xf3n del \xfaltimo stash realizado (cambios realizados en archivos)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git show stash"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver informaci\xf3nd e un stash en concreto")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git show stash@{0}"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Recuperar el \xfaltimo ingreso del stash y eliminarlo al mismo tiempo")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash pop"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Recuperar el \xfaltimo ingreso del stash")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash apply"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Recuperar un stash por su ID")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git stash apply "ID-stash" ES EQUIVALENTE A git stash apply stash@{0}')),Object(n.b)("p",{parentName:"li"},"Ejemplo: ",Object(n.b)("inlineCode",{parentName:"p"},"git stash apply stash@{1}"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Eliminar el \xfaltimo stash realizado")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash drop ES EQUIVALENTE A git stash drop stash@{0}")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git stash drop "ID-stash"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Guardar todo menos los archivos en el stage (escenario)")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash save --keep-index"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Incluye todos los archivos junto a los que git no le da seguimiento ()")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash save --include-untracked"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Borrar todas las entradas del stash sin recuperaci\xf3n")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git stash clear")))),Object(n.b)("h2",{id:"rebase"},"REBASE"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Traer commits de otra rama a la actual y rebasarlos")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git rebase "nombre-rama"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Rebase interactivo: ordenar commits, corregir mensajes de estos, unirlos o separarlos")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git rebase -i HEAD~"numero-de-commits"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Opciones del comando anterior")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"squash")," = une el commit donde es utilizado con el anterior"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"reward")," = cambiar el mensaje del commit"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"edit")," = editar uno o m\xe1s commits (Ej: separar archivos)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"En caso de separar un commit en dos sera necesario dar un salto atr\xe1s")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git reset HEAD^")))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Agregar uno de los archivos al stage y realizar el commit"),Object(n.b)("li",{parentName:"ol"},"Agregar los dem\xe1s archivos y realizar los commits deseados"),Object(n.b)("li",{parentName:"ol"},"Continuar el rebase con:")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"git rebase --continue")),Object(n.b)("h2",{id:"comandos-\xfatiles"},"COMANDOS \xdaTILES"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Buscar una cadena en todo el \xe1bol de contenido")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git grep ""palabra o frase a buscar""'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Interfaz gr\xe1fica para un repositorio local")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"sudo apt-get install gitk"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"gitk"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Ver objeto de \xe1rbol junto con el nombre y modo de cada uno, y el valor blob SHA-1")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git ls-tree "hash-commit"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Usando el valor SHA-1 se puede ver el tipo de objeto")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},'git cat-file -p "valor-SHA-1"'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear archivo zip o tar de un \xe1rbol del repositorio")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git archive -- -format=tar master"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Chequeo de integridad del sistema de archivos de git. Detecta cualquier objeto corrompido")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git fsck")))),Object(n.b)("h2",{id:"alias"},"ALIAS"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'git config --global alias.lg "log --oneline --decorate --all --graph"')),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},'git config --global alias.s "status -s -b"')),Object(n.b)("h2",{id:"ssh"},"SSH"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Entrar en el directorio de usuario")),Object(n.b)("p",{parentName:"li"},"cd user-name/.ssh")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Crear las claves ssh para GitHub")),Object(n.b)("p",{parentName:"li"},'ssh-keygen -t rsa -C "',Object(n.b)("a",{parentName:"p",href:"mailto:direccion@de.correo"},"direccion@de.correo"),'"')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Registrar GitHub para SSH")),Object(n.b)("p",{parentName:"li"},"ssh -T ",Object(n.b)("a",{parentName:"p",href:"mailto:git@github.com"},"git@github.com")))),Object(n.b)("h2",{id:"errores-comunes"},"ERRORES COMUNES"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Agregando todos los archivos al escenario")),Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"git add -A")),Object(n.b)("p",{parentName:"li"},'warning: LF will be replaced by CRLF in "rutaArchivo"'),Object(n.b)("p",{parentName:"li"},"The file will have its orginal line endings in your working directory"),Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Soluci\xf3n:"),"\n",Object(n.b)("inlineCode",{parentName:"p"},"git config core.autocrlf true")))))}o.isMDXComponent=!0},89:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return j}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),c=function(e){var a=n.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=c(e.components);return n.a.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},O=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=c(t),O=r,j=m["".concat(b,".").concat(O)]||m[O]||s[O]||i;return t?n.a.createElement(j,p(p({ref:a},o),{},{components:t})):n.a.createElement(j,p({ref:a},o))}));function j(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,b=new Array(i);b[0]=O;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<i;o++)b[o]=t[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);