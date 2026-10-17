**AnnotaryCat no recopila ningún dato.** No operamos ningún servidor que reciba tus datos: no hay cuentas, almacenamiento en la nube, telemetría, estadísticas de uso, publicidad ni SDK de terceros para análisis o informes de fallos.

### Dónde se guardan tus datos

- Las imágenes, vídeos, textos, anotaciones y ajustes de proyecto permanecen en la carpeta de trabajo que elijas, en tu ordenador o en un disco que montes.
- Los ajustes de la aplicación, registros, informes de fallos y claves de acceso permanecen en el directorio de configuración de tu usuario en este equipo. En la versión de macOS con aislamiento están dentro del contenedor de la aplicación.
- Los registros solo contienen nombres de comandos, códigos de error y duraciones. Nunca incluyen datos de proyectos, anotaciones, contenidos de archivos, valores de parámetros ni contraseñas. Tu carpeta personal se muestra como `~`.

### Cuándo salen datos de tu ordenador

Solo cuando lo solicitas expresamente y hacia un destino que tú elijas:

- **Tu propio servidor SSH.** Si tu conjunto de datos está en un servidor remoto, la aplicación se conecta al host que indiques mediante el `ssh` / `sftp` del sistema.
- **Herramientas de IA que conectes.** Al activar el canal de control o MCP, las herramientas de IA que ejecutes en este equipo pueden leer y modificar los proyectos y carpetas que autorices. El destino de los datos de esas herramientas depende del servicio de IA que utilices. Puedes desactivar el acceso de IA para cada proyecto.
- **Informes de problemas.** La aplicación nunca envía nada por sí sola. Al elegir «Enviar un informe de problema», abre una página de GitHub en tu navegador. Tú revisas el paquete de diagnóstico y decides si adjuntarlo. Una vez adjuntados, el issue y los archivos son públicos y están sujetos a la política de privacidad de GitHub.

### Contraseñas y claves

- Las contraseñas SSH se usan una sola vez y no se guardan.
- Una clave de acceso creada al elegir «conectar automáticamente a partir de ahora» permanece en este equipo y solo tu cuenta de usuario puede leerla.
- Si se admiten tokens de API en el futuro, se guardarán en el llavero del sistema.
- Las contraseñas, claves y tokens nunca se escriben en archivos de proyecto, registros ni resultados de comandos.

### Menores

La aplicación no recopila información de menores porque no recopila información de nadie.

### Cambios y contacto

Los cambios de esta política se publican con las actualizaciones de la aplicación y esta página indicará su fecha de entrada en vigor.
Consultas: [issues de GitHub](https://github.com/seagochen/AnnotaryCat/issues).
