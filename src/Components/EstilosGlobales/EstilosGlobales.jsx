import {createGlobalStyle} from "styled-components";
import GandhiSansRegular from './fonts/GandhiSans-Regular.otf'
import GandhiSansBold from './fonts/GandhiSans-Bold.otf'


 export const EstilosGlobales = createGlobalStyle
    `  @font-face {
        font-family: "GandhiSansRegular";
        src: local("Gandhi Sans Regular"), local("GandhiSansRegular"), url(${GandhiSansRegular});
    }

    @font-face {
        font-family: "GandhiSansBold";
        src: local("Gandhi Sans Bold"), local("GandhiSansBold"), url(${GandhiSansBold});
    }

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        font-family: GandhiSansRegular,sans-serif;


    }

    /* Secciones
       ========================================================================== */

    /**
     * Eliminar el margen en todos los navegadores.
     */

    body {
        margin: 0;
        box-sizing: border-box;
        background-color: #03122F;
    }

    /**
     * Renderizar el elemento principal consistentemente en IE.
     */

    main {
        display: block;
    }

    /**
     * Corregir el tamaño de la fuente y el margen en elementos h1 dentro de contextos de sección y
     * artículo en Chrome, Firefox y Safari.
     */

    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    /* Agrupación de contenido
       ========================================================================== */

    /**
     * 1. Agregar el tamaño de caja correcto en Firefox.
     * 2. Mostrar el desbordamiento en Edge e IE.
     */

    hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
    }

    /**
     * 1. Corregir la herencia y el escalado del tamaño de fuente en todos los navegadores.
     * 2. Corregir el tamaño de fuente em extraño en todos los navegadores.
     */

    pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    /* Semántica a nivel de texto
       ========================================================================== */

    /**
     * Eliminar el fondo gris en enlaces activos en IE 10.
     */

    a {
        background-color: transparent;
    }

    /**
     * 1. Eliminar el borde inferior en Chrome 57-
     * 2. Agregar la decoración de texto correcta en Chrome, Edge, IE, Opera y Safari.
     */

    abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
    }

    /**
     * Agregar el peso de fuente correcto en Chrome, Edge y Safari.
     */

    b,
    strong {
        font-weight: bolder;
    }

    /**
     * 1. Corregir la herencia y el escalado del tamaño de fuente en todos los navegadores.
     * 2. Corregir el tamaño de fuente em extraño en todos los navegadores.
     */

    code,
    kbd,
    samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
    }

    /**
     * Agregar el tamaño de fuente correcto en todos los navegadores.
     */

    small {
        font-size: 80%;
    }

    /**
     * Evitar que los elementos sub y sup afecten la altura de la línea en
     * todos los navegadores.
     */

    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /* Contenido incrustado
       ========================================================================== */

    /**
     * Eliminar el borde en imágenes dentro de enlaces en IE 10.
     */

    img {
        border-style: none;
    }

    /* Formularios
       ========================================================================== */

    /**
     * 1. Cambiar los estilos de fuente en todos los navegadores.
     * 2. Eliminar el margen en Firefox y Safari.
     */

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    /**
     * Mostrar el desbordamiento en IE.
     * 1. Mostrar el desbordamiento en Edge.
     */

    button,
    input { /* 1 */
        overflow: visible;
    }

    /**
     * Eliminar la herencia de la transformación de texto en Edge, Firefox e IE.
     * 1. Eliminar la herencia de la transformación de texto en Firefox.
     */

    button,
    select { /* 1 */
        text-transform: none;
    }

    /**
     * Corregir la imposibilidad de estilizar tipos clicables en iOS y Safari.
     */

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    /**
     * Eliminar el borde interior y el relleno en Firefox.
     */

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    /**
     * Restaurar los estilos de enfoque desactivados por la regla anterior.
     */

    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    /**
     * Corregir el relleno en Firefox.
     */

    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }

    /**
     * 1. Corregir el ajuste de texto en Edge e IE.
     * 2. Corregir la herencia de color desde los elementos fieldset en IE.
     * 3. Eliminar el relleno para que los desarrolladores no se encuentren con problemas cuando desactiven el relleno en
     *    los elementos fieldset en todos los navegadores.
     */

    legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
    }

    /**
     * Agregar la alineación vertical correcta en Chrome, Firefox y Opera.
     */

    progress {
        vertical-align: baseline;
    }

    /**
     * Eliminar la barra de desplazamiento vertical predeterminada en IE 10+.
     */

    textarea {
        overflow: auto;
    }

    /**
     * 1. Agregar el tamaño de caja correcto en IE 10.
     * 2. Eliminar el relleno en IE 10.
     */

    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
    }

    /**
     * Corregir el estilo del cursor de los botones de incremento y decremento en Chrome.
     */

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    /**
     * 1. Corregir la apariencia extraña en Chrome y Safari.
     * 2. Corregir el estilo del contorno en Safari.
     */

    [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
    }

    /**
     * Eliminar el relleno interior en Chrome y Safari en macOS.
     */

    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /**
     * 1. Corregir la imposibilidad de estilizar tipos clicables en iOS y Safari.
     * 2. Cambiar las propiedades de fuente para heredar en Safari.
     */

    ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
    }

    /* Interactivo
       ========================================================================== */

    /*
     * Agregar la visualización correcta en Edge, IE 10+ y Firefox.
     */

    details {
        display: block;
    }

    /*
     * Agregar la visualización correcta en todos los navegadores.
     */

    summary {
        display: list-item;
    }

    /* Varios
       ========================================================================== */

    /**
     * Agregar la visualización correcta en IE 10+.
     */

    template {
        display: none;
    }

    /**
     * Agregar la visualización correcta en IE 10.
     */

    [hidden] {
        display: none;
    }
    `