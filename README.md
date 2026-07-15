# PrimerProyecto

**PrimerProyecto** es una aplicación web sencilla construida con **Angular** (standalone components) y **Firebase Firestore**. Permite a los usuarios crear, listar y almacenar recetas de cocina. Cada receta incluye nombre, ingredientes, tiempo de elaboración, descripción, número de porciones y una URL de imagen.

## Características principales
- **Componentes standalone** de Angular sin módulos tradicionales.
- **Firebase Firestore** configurado en `src/app/app.config.ts` para almacenar recetas en tiempo real.
- UI responsiva con modal para añadir recetas y tabla para visualizarlas.
- Uso de formularios con `ngModel` para la captura de datos.
- Deploy opcional a **Firebase Hosting**.

## Estructura del proyecto
```
PrimerProyecto/
├─ src/
│  ├─ app/
│  │  ├─ app.config.ts        # Configuración de Angular + Firebase
│  │  ├─ enviroment.ts        # Credenciales de Firebase
│  │  ├─ componentes/
│  │  │  └─ home/            # HomeComponent (lista y modal de recetas)
│  │  └─ app.routes.ts        # Rutas Angular (solo Home)
│  └─ index.html               # Entrada HTML
├─ angular.json                # Configuración Angular CLI
├─ firebase.json               # Configuración Firebase Hosting
├─ firestore.rules            # Reglas de seguridad (permite leer/escribir hasta 2026‑06‑13)
└─ README.md                  # Este documento
```

## Instalación y ejecución local
```bash
# Clonar el repositorio (cuando esté en GitHub)
git clone <repo-url>
cd PrimerProyecto

# Instalar dependencias
npm install

# Ejecutar la aplicación en modo desarrollo
npm run dev   # o 'ng serve'
```
Abre `http://localhost:4200` en tu navegador.

## Despliegue a Firebase Hosting (opcional)
```bash
# Compilar la aplicación Angular
npm run build

# Deploy usando Firebase CLI
firebase deploy --only hosting
```

## Flujo Git (baseline)
1. `git init` – inicializa el repositorio (si no está creado).
2. `git add .` – prepara todos los archivos (respeta `.gitignore`).
3. `git commit -m "Initial commit – Angular + Firebase starter"`
4. Añade el remoto y empuja a la rama principal:
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME/PrimerProyecto.git
   git push -u origin main
   ```
5. Para nuevas funcionalidades, usa ramas de feature:
   ```bash
   git checkout -b feature/nueva‑receta
   # ... cambios ...
   git add .
   git commit -m "Add recipe creation UI"
   git push -u origin feature/nueva‑receta
   ```
   Luego abre un Pull Request.

## Licencia
MIT
