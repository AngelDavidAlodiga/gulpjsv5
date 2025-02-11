// Importar el módulo de gulp
const gulp = require("gulp");

// Crear una tarea simple de Gulp
gulp.task("hello", (done) => {
  console.log("¡Hola desde Gulp 5!");
  done(); // Se debe llamar a `done()` cuando la tarea esté completa
});

// Tarea predeterminada
gulp.task("default", gulp.series("hello"));