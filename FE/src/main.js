import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


// Favicon
import "../src/assets/favicon/apple-touch-icon.png";
import "../src/assets/favicon/favicon-32x32.png";
import "../src/assets/favicon/favicon-16x16.png";
// import "../src/assets/favicon/site.webmanifest";

//Styles 
import "../src/assets/css/main.css";

//Scripts
// import "../src/assets/js/scripts.js";

library.add(fas);
createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");

/*

<!-- Dinh dang -->
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="76x76" href="../src/assets/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="../src/assets/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="../src/assets/favicon/favicon-16x16.png" />
    <link rel="manifest" href="../src/assets/favicon/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <!-- Fonts -->
    <link rel="stylesheet" href="../src/assets/fonts/stylesheet.css" />

    <!-- Styles -->
  import "../src/assets/css/main.css";

    <!-- Scripts -->
    <script src="../src/assets/js/scripts.js"></script>
*/