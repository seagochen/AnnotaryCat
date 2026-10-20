**AnnotaryCat no recopila ningún dato.** No operamos ningún servidor que reciba tus datos: no hay cuentas, almacenamiento en la nube, telemetría, estadísticas de uso, publicidad ni SDK de terceros para análisis o informes de fallos.

### La anotación local funciona completamente sin conexión

Iniciar la aplicación y anotar, guardar y exportar datos locales no requiere red. La aplicación no realiza solicitudes externas automáticas: no comprueba actualizaciones ni envía telemetría o informes de fallos automáticamente. No descarga modelos, fuentes ni dependencias de ejecución al iniciarse. Esta declaración cubre la anotación local; las funciones remotas que configures y uses, los servicios de la tienda del sistema y los navegadores o programas externos que abras tienen los límites descritos a continuación.

### Dónde se guardan tus datos

- Las imágenes, vídeos, textos, anotaciones y ajustes de proyecto permanecen en la carpeta de trabajo que elijas, en tu ordenador o en un disco que montes.
- Los ajustes de la aplicación, registros, informes de fallos y claves de acceso permanecen en el directorio de configuración de tu usuario en este equipo. En la versión de macOS con aislamiento están dentro del contenedor de la aplicación.
- Los registros solo contienen nombres de comandos, códigos de error y duraciones. Nunca incluyen datos de proyectos, anotaciones, contenidos de archivos, valores de parámetros ni contraseñas. Tu carpeta personal se muestra como `~`.

### Cuándo salen datos de tu ordenador

Solo cuando lo solicitas expresamente y hacia un destino que tú elijas:

- **Tu propio servidor SSH.** Si tu conjunto de datos está en un servidor remoto, la aplicación se conecta al host que indiques mediante el `ssh` / `sftp` del sistema.
- **Herramientas de IA que conectes.** Al activar el canal de control o MCP, las herramientas de IA que ejecutes en este equipo pueden leer y modificar los proyectos y carpetas que autorices. El destino de los datos de esas herramientas depende del servicio de IA que utilices. Puedes desactivar el acceso de IA para cada proyecto.
- **Informes de problemas.** La aplicación nunca envía nada por sí sola. Al elegir «Enviar un informe de problema», abre una página de GitHub en tu navegador. Tú revisas el paquete de diagnóstico y decides si adjuntarlo. Una vez adjuntados, el issue y los archivos son públicos y están sujetos a la política de privacidad de GitHub.
- **Almacenamiento S3 / compatible con S3 que configures.** Al configurar y usar un conjunto de datos remoto, la aplicación invoca tu AWS CLI instalado para acceder al almacenamiento y a los servicios de autenticación según el bucket, endpoint y las credenciales que elijas. Las solicitudes nunca pasan por nuestros servidores.
- **Páginas web que abras.** Los enlaces a condiciones, privacidad y gestión de suscripciones se abren en el navegador del sistema solo cuando los eliges. El proveedor de la página gestiona sus solicitudes de red.

El canal de control escucha solo en `127.0.0.1`; MCP usa la entrada/salida estándar local (o loopback al conectar con una ventana abierta). El asistente de contraseñas SSH también usa solo loopback. Estas conexiones no exponen servicios a otros equipos ni suben datos a nuestros servidores.

### Servicios de la tienda

Las compras dentro de la aplicación usan las API de la tienda del sistema (actualmente StoreKit 2 en macOS). Comprar, restaurar y consultar productos o el estado de las suscripciones puede hacer que los servicios del sistema se comuniquen con el operador de la tienda. La aplicación no implementa verificación de licencias en línea, no pasa por nuestros servidores ni adjunta datos de anotación a las transacciones. El operador trata las transacciones según su política de privacidad. La actividad de red de la tienda, el sistema operativo, el navegador y las herramientas externas que ejecutes queda fuera de esta declaración de funcionamiento local sin conexión.

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
