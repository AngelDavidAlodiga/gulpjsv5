import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';

// Tarea para optimizar imágenes
gulp.task('images', () => {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin([
      mozjpeg({ quality: 80, progressive: true }), // Optimización JPEG
      optipng({ optimizationLevel: 5 }), // Optimización PNG
      svgo() // Optimización SVG
    ], {
      verbose: true // Muestra más detalles sobre el proceso de optimización
    }))
    .pipe(gulp.dest('dist/images')); // Guardar las imágenes optimizadas
});

// Tarea predeterminada
gulp.task('default', gulp.series('images'));
