🌍 Explorador de Países - Ionic/Angular App
https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white
https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white

Una aplicación móvil moderna para explorar información de países del mundo, construida con Ionic 7 y Angular 16.

✨ Características
🔍 Búsqueda inteligente de países por nombre

🏛️ Listado completo con banderas y datos básicos

📱 Diseño responsive adaptado para móvil y escritorio

🌙 Modo oscuro automático según preferencias del sistema

⚡ Transiciones suaves entre páginas

📊 Detalles completos de cada país

🚀 Carga rápida con manejo de errores

🚀 Demo en Vivo
🔗 [Enlace al demo (si está disponible)]

📸 Capturas de Pantalla
Lista de Países	Detalles del País	Búsqueda
https://via.placeholder.com/300x600/3880FF/ffffff?text=Lista+Pa%C3%ADses	https://via.placeholder.com/300x600/52C41A/ffffff?text=Detalles	https://via.placeholder.com/300x600/FAAD14/ffffff?text=B%C3%BAsqueda
🛠️ Tecnologías Utilizadas
Framework: Ionic 7 + Angular 16

Lenguaje: TypeScript

API: REST Countries API v3.1

Estilos: SCSS con diseño responsive

Animaciones: Transiciones CSS nativas

Icons: Ionicons

📦 Instalación
Prerrequisitos
Node.js 16.x o superior

npm 8.x o superior

Ionic CLI

Pasos de instalación
Clonar el repositorio

bash
git clone https://github.com/tuusuario/explorador-paises.git
cd explorador-paises
Instalar dependencias

bash
npm install
Instalar Ionic CLI (si no lo tienes)

bash
npm install -g @ionic/cli
Ejecutar en modo desarrollo

bash
ionic serve
Para compilar para producción

bash
ionic build --prod
🎯 Uso
Desarrollo
bash
# Iniciar servidor de desarrollo
ionic serve

# Ejecutar en modo laboratorio (multi-dispositivo)
ionic serve --lab

# Ejecutar pruebas unitarias
npm test
Compilación
bash
# Para Android
ionic capacitor add android
ionic capacitor copy android
ionic capacitor sync android

# Para iOS
ionic capacitor add ios
ionic capacitor copy ios
ionic capacitor sync ios
Despliegue
bash
# Build para web
ionic build --prod

# Desplegar en Firebase Hosting
firebase deploy
📁 Estructura del Proyecto
text
explorador-paises/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── country-list/          # Página principal
│   │   │   │   ├── country-list.page.html
│   │   │   │   ├── country-list.page.ts
│   │   │   │   └── country-list.page.scss
│   │   │   └── country-detail/        # Página de detalles
│   │   ├── services/
│   │   │   └── api.service.ts         # Servicio API
│   │   ├── app.component.ts           # Componente raíz
│   │   ├── app.routes.ts              # Rutas de la aplicación
│   │   └── app.config.ts              # Configuración
│   ├── assets/                        # Imágenes y recursos
│   ├── environments/                  # Variables de entorno
│   ├── theme/                         # Variables globales SCSS
│   └── index.html                     # HTML principal
├── ionic.config.json                  # Configuración Ionic
├── angular.json                       # Configuración Angular
├── package.json                       # Dependencias
└── README.md                          # Este archivo

🔧 API Integration
La aplicación utiliza REST Countries API v3.1:

typescript
--
// Ejemplo de uso del servicio
this.apiService.getAllCountries().subscribe(countries => {
  console.log(countries);
});
--
Endpoints utilizados:
GET /all - Lista completa de países

GET /name/{name} - Búsqueda por nombre

Fallback con datos mock
Si la API no está disponible, la aplicación muestra datos de ejemplo para:

Perú, México, España, Colombia, Argentina

🎨 Personalización
Variables de tema
Modifica src/theme/variables.scss:

scss
:root {
  --ion-color-primary: #3880ff;
  --ion-color-secondary: #3dc2ff;
  --ion-color-tertiary: #5260ff;
  // ... más personalizaciones
}
Añadir más países al mock
Edita src/app/services/api.service.ts:

typescript
private getMockCountries(): Observable<any[]> {
  const mockData = [
    // Añade más países aquí
    {
      name: { common: 'Nuevo País', official: 'Nuevo País Oficial' },
      flags: { png: 'https://flagcdn.com/w320/xx.png' },
      // ... más propiedades
    }
  ];
}
🤝 Contribuir
¡Las contribuciones son bienvenidas! Sigue estos pasos:

Haz fork del proyecto

Crea una rama (git checkout -b feature/AmazingFeature)

Haz commit de tus cambios (git commit -m 'Add some AmazingFeature')

Haz push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request

Guía de estilo de código
Usa TypeScript con tipado estricto

Sigue el patrón de componentes de Angular

Mantén el código limpio y comentado

Usa SCSS para estilos

📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

🐛 Problemas Conocidos
Advertencia de accesibilidad ARIA en transiciones de página

Fallback de imágenes de banderas

Optimización de carga para lista larga de países

📞 Soporte
Si encuentras algún problema, por favor:

Revisa los issues existentes

Crea un nuevo issue con:

Descripción del problema

Pasos para reproducir

Capturas de pantalla (si aplica)

Versión del navegador/device

🌟 Estrellas
Si este proyecto te resulta útil, ¡dale una estrella! ⭐

Desarrollado con ❤️ usando Ionic & Angular

https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white

