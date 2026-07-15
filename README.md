# 🍽️ PrimerProyecto — Gestión de Recetas

Aplicación web desarrollada con **Angular 18** y **Firebase (Firestore)** que permite gestionar un catálogo de recetas de cocina con autenticación de usuario, CRUD completo, exportación a PDF y generación de códigos QR.

Link de prueba: https://primerproyecto-64380.web.app/
Credenciales:
usuario: publico
contraseña: 1234
---

## 📸 Funcionalidades

- 🔐 **Login** con validación contra Firestore
- 📋 **Listado de recetas** en tiempo real (Firestore listener)
- ➕ **Agregar / Editar** recetas mediante un modal de Bootstrap
- 🗑️ **Eliminación lógica** de recetas (campo `estatus`)
- 🎨 **Clasificación visual** por categoría (Antojitos, Pasta, Otros)
- 🖨️ **Reporte** con vista de tarjeta, código QR y exportación a PDF
- ✅ **SweetAlert2** para confirmaciones elegantes

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 18 | Framework principal |
| AngularFire | 18 | Integración con Firebase |
| Firebase / Firestore | 12 | Base de datos en la nube |
| Bootstrap | via CDN | Estilos y componentes UI |
| SweetAlert2 | 11 | Alertas y confirmaciones |
| jsPDF | 4 | Exportación a PDF |
| angularx-qrcode | 18 | Generación de códigos QR |
| Angular SSR | 18 | Server-Side Rendering |

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── componentes/
│   │   ├── login/          # Pantalla de inicio de sesión
│   │   │   ├── login.ts
│   │   │   ├── login.html
│   │   │   └── login.css
│   │   ├── home/           # Pantalla principal (CRUD de recetas)
│   │   │   ├── home.ts
│   │   │   ├── home.html
│   │   │   └── home.css
│   │   └── reporte/        # Tarjeta de detalle + PDF + QR
│   │       ├── reporte.ts
│   │       ├── reporte.html
│   │       └── reporte.css
│   ├── app.component.ts
│   ├── app.config.ts       # Providers globales (Firebase, Router)
│   ├── app.routes.ts       # Definición de rutas
│   └── enviroment.ts       # Configuración de Firebase
├── index.html
├── main.ts
└── styles.css
```

---

## 🗄️ Colecciones de Firestore

### `usuario`
| Campo | Tipo | Descripción |
|---|---|---|
| `idusuario` | string | Identificador único |
| `user` | string | Nombre de usuario |
| `password` | string | Contraseña |
| `nombre` | string | Nombre completo |

### `Receta`
| Campo | Tipo | Descripción |
|---|---|---|
| `idreceta` | string | Identificador único (10 chars aleatorios) |
| `nombrereceta` | string | Nombre de la receta |
| `ingredientes` | string | Lista de ingredientes |
| `tiempo` | number | Tiempo de elaboración (minutos) |
| `descripcion` | string | Descripción del platillo |
| `porciones` | number | Número de porciones |
| `imagenURL` | string | URL de la imagen |
| `clasificacion` | string | Categoría: `Antojitos`, `Pasta`, `Otros` |
| `estatus` | boolean | `true` = activa, `false` = eliminada |

---

## 🚀 Instalación y Ejecución

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- [Angular CLI](https://angular.io/cli) v18
- Cuenta en [Firebase](https://firebase.google.com/)

### Pasos

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd PrimerProyecto

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Build de producción

```bash
npm run build
```

---

## ⚙️ Configuración de Firebase

Edita el archivo `src/app/enviroment.ts` con las credenciales de tu proyecto Firebase:

```typescript
export const enviroment = {
    firebase: {
        apiKey: "TU_API_KEY",
        authDomain: "TU_PROJECT.firebaseapp.com",
        projectId: "TU_PROJECT_ID",
        storageBucket: "TU_PROJECT.firebasestorage.app",
        messagingSenderId: "TU_SENDER_ID",
        appId: "TU_APP_ID"
    }
}
```

> ⚠️ **Importante:** No subas tus credenciales reales al repositorio. Considera usar variables de entorno o el archivo `.gitignore` para protegerlas.

---

## 🔒 Reglas de Firestore

Asegúrate de configurar las reglas de seguridad en la consola de Firebase. Para desarrollo puedes usar:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ **Para producción**, implementa reglas de seguridad adecuadas que restrinjan el acceso por usuario.

---

## 🧩 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Login` | Pantalla de autenticación |
| `/home` | `HomeComponent` | Gestión de recetas |

---

## 📄 Licencia

Proyecto académico — Universidad del Noreste (UNE) · Aplicaciones para Internet
