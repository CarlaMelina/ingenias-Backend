# Reseta para un proyecto feliz.
¡Bienvenidas! 👋 Vamos a construir desde cero un proyecto con todo lo visto hasta ahora.

## 🔹 Manos a la obra
#### Creo carpeta del proyecto & moverte dentro de la misma
```
> mkdir motor-de-plantillas && cd motor-de-plantillas
```
## Inicializamos el proyecto de NODEJS, creando package.json file 
```
> npm init -y
```
#### Creo el archivo index (entry point of our API)
```
> touch app.js
```

### Instalamos dependencias para la configuración básica:
* Dev Dependencies 
```
> npm i -D nodemon 
```
* Dependencies 
```
> npm i express ejs path --save
```
### Modificamos nuestro package.json con los escript que necesitamos
"start": "node --watch app.js",
"dev":"nodemon app.js",

# Creo carpeta que contendra las vistas y accedo a la misma
mkdir views && cd views

# Creo el archivo index o server
touch index.ejs

# Recordando conceptos
* Express.js es el framework backend que proporciona infraestructura web rápida, minimalista y flexible para Node.js y es una parte extensa del ecosistema JavaScript. Está diseñado para construir aplicaciones web de una sola página, multipágina e híbridas, también se ha convertido en el estándar para desarrollar aplicaciones backend con Node.js. [EXPRESS - NPM LIBRARY](https://www.npmjs.com/package/express) 

* Nodemon es una utilidad que nos permite monitorear los cambios realizados en el código, al detectarlos reinicia inmediatamente el servidor de Node.js por nosotros, con lo cual tendríamos de forma inmediata la versión mas reciente de nuestro proyecto ejecutándose.[NODEMON - NPM LIBRARY](https://www.npmjs.com/package/nodemon)

* Morgan es un Middleware de nivel de solicitud HTTP. Es una gran herramienta que registra las solicitudes junto con alguna otra información dependiendo de su configuración y el preajuste utilizado. Demuestra ser muy útil durante la depuración y también si desea crear archivos de registro. [MORGAN  - NPM LIBRARY](https://www.npmjs.com/package/morgan) 

* EJS es uno de los motores de plantilla más populares para JavaScript. Una de las razones para elegirlo es que el código EJS parece HTML puro. 
Conserva la sintaxis de HTML al tiempo que permite la interpolación de datos, a diferencia de Pug ( otro motor de plantilla ) que utiliza una sintaxis diferente con sangría y espacios.
Los archivos EJS se guardan con el extensión de archivo .ejs[EJS - NPM LIBRARY](https://www.npmjs.com/package/ejs) 

* Un UUID es un identificador único; personalmente lo uso para generar cadenas aleatorias y criptográficamente seguras.[UUID - NPM LIBRARY](https://www.npmjs.com/package/uuid) 

### Comenzamos a completar nuestros archivos
.books-express
├── package.json
└── src
    ├──app.js
    ├──index.js
    │ 
    ├── public
    │       │
    │       └── stylesheets
    │               └── style.css
    ├── routes
    │       └── index.js
    │  
    └── views
            ├── partials
            │     └── footer.ejs
            │     └── header.ejs
            │     └── navegation.ejs
            ├── 404.ejs
            ├── index.ejs
            └── new-book.ejs

# Express Books

Express Books es una Web Application para guardar la lista de tus libros favoritos. Toda esta infornacion se alojara en Json file.

# ScreenShoot

![GitHub Logo](docs/screenshot.png)

# Environment Variables

- `PORT`, this is the http port of the server. by default is `5000`.

Also you can create a .env file with the environment variables mentioned above.

# Installation
```
git clone https://github.com/jeanmunoz23/ingenias-Backend.git/books-express/
npm install
npm run dev
```