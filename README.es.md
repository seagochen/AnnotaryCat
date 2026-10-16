# Comentarios sobre AnnotaryCat

[English](README.md) · [Chino simplificado](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · **Español** · [Português](README.pt.md) · [Русский](README.ru.md)

Este repositorio recoge los informes de problemas y las sugerencias de funciones para AnnotaryCat.

> **Todo lo que se publica aquí es público.** Cualquiera puede leer las issues y descargar sus archivos adjuntos. No publiques contraseñas, tokens de API, claves SSH ni imágenes o datos que no tengas permiso para compartir.

## 1. Crear el paquete de diagnóstico

El paquete de diagnóstico es un archivo `.zip` que AnnotaryCat crea en tu ordenador. Contiene:

- `system.json`: la versión de AnnotaryCat, el sistema operativo, la CPU, la GPU y la configuración (sin contraseñas, tokens ni rutas de los espacios de trabajo);
- `logs/`: los registros de actividad de los últimos días;
- `crashes/`: los registros de fallos, si AnnotaryCat no se cerró correctamente.

Los registros solo anotan nombres de comandos, códigos de error y duraciones. No contienen datos de proyectos, anotaciones, contenido de archivos, valores de parámetros ni contraseñas. Tu carpeta personal aparece como `~`.

El idioma predeterminado de la interfaz de AnnotaryCat es el inglés. Las opciones del menú en inglés son:

| Opción del menú | Qué hace |
|---|---|
| **Help › Send a problem report…** (Ayuda › Enviar un informe de problema…) | **Recomendado.** Crea el paquete, abre en tu navegador una issue nueva en este repositorio con el título y la plantilla ya rellenados, y te indica dónde está el paquete. |
| **Help › Export diagnostics…** (Ayuda › Exportar el paquete de diagnóstico…) | Guarda el paquete donde elijas. Después abre tú mismo una [issue nueva](../../issues/new). |

Antes de adjuntar el paquete, revísalo: el diálogo puede abrir cada uno de sus archivos. Si algo no debe ser público (por ejemplo, el nombre de una carpeta), quita ese archivo del zip o no adjuntes el paquete y describe el problema con palabras.

**Si AnnotaryCat no arranca**, adjunta en su lugar los archivos de su carpeta de registros (los archivos `annotarycat-*.log` y `crash-*.log`, comprimidos en un zip):

| Sistema | Carpeta de registros |
|---|---|
| Windows | `%LOCALAPPDATA%\AnnotaryCat\logs` |
| macOS | `~/Library/Logs/AnnotaryCat` |
| Linux | `$XDG_STATE_HOME/annotarycat/logs` (normalmente `~/.local/state/annotarycat/logs`) |

Los paquetes creados con Send a problem report… se guardan en la carpeta `reports`, dentro de la carpeta de registros.

## 2. Escribir la issue

**Título:** `[Bug] AnnotaryCat <versión> (<sistema>): <resumen en una línea>`

Por ejemplo: `[Bug] AnnotaryCat 0.2.0 (windows-x86_64): la exportación a COCO se detiene en el 50 %`. La versión aparece en Help › About AnnotaryCat (Ayuda › Acerca de).

**Texto:** usa esta plantilla; Send a problem report… la rellena por ti. Deja los encabezados en inglés y escribe debajo en el idioma que prefieras.

```markdown
## Description

Qué ha fallado, en una o dos frases.

## Steps to reproduce

1.
2.
3.

## Expected behavior

Lo que esperabas que pasara.

## Actual behavior

Lo que pasó en realidad, con el mensaje de error que aparezca.

## Environment

- Version:
- OS:
- Diagnostics bundle: (arrastra aquí el archivo .zip)
```

Luego **arrastra el archivo `.zip` al texto** para adjuntarlo, revísalo todo una vez más y envía la issue.

Consejos:

- Un problema por issue. Busca primero en las [issues existentes](../../issues); si tu problema ya está, añade un comentario.
- Las capturas de pantalla ayudan, siempre que no muestren nada privado.
- Indica si ocurre siempre o solo a veces.

## 3. Sugerencias de funciones

Título: `[Feature] <lo que te gustaría>`. En el texto, describe qué quieres hacer, por qué y cómo lo haces ahora. No hace falta el paquete de diagnóstico.
