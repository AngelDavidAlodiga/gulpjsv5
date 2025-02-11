import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';

// Tarea para optimizar imágenes
gulp.task('images', () => {
  return gulp.src('src/images/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin([
      mozjpeg({ quality: 70, progressive: true }), // Mejor compresión de JPEG
      optipng({ optimizationLevel: 7 }), // Máxima optimización PNG
      svgo({ plugins: [{ name: 'removeViewBox', active: false }] }) // Solo desactivar removeViewBox
    ], {
      verbose: true // Detalles sobre el proceso de optimización
    }))
    .pipe(gulp.dest('dist/images')); // Guardar las imágenes optimizadas
});

// Tarea predeterminada
gulp.task('default', gulp.series('images'));
