// Este archivo configura Vite para que los 
// archivos estáticos del proyecto se tomen desde la ruta '/js-vite-blackjack/'.

// Es útil cuando el proyecto se despliega 
// en un subdirectorio, por ejemplo en GitHub Pages.

// La función defineConfig permite definir 
// opciones de configuración para el entorno de construcción y desarrollo de Vite.


import { defineConfig } from "vite";

export default defineConfig({
    base: '/js-vite-blackjack/',
    
});