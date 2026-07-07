# 📱 Simpsons App

Aplicación móvil desarrollada con **Ionic + Angular** como proyecto práctico del curso **Desarrollo de Aplicaciones Móviles con Ionic y Angular**.

El objetivo de esta aplicación es aprender la organización de proyectos, navegación mediante rutas, componentes Standalone y buenas prácticas de desarrollo utilizando una arquitectura por funcionalidades.

---

## 🚀 Tecnologías utilizadas

- Ionic Framework
- Angular
- TypeScript
- HTML5
- SCSS
- Angular Router

---

## 📂 Estructura del proyecto

```text
src/
└── app
    ├── core/
    ├── shared/
    ├── features/
    │   ├── home/
    │   ├── characters/
    │   ├── episodes/
    │   ├── locations/
    │   ├── profile/
    │   └── main/
    ├── app.component.ts
    └── app.routes.ts
```

---

## 📖 Descripción de las carpetas

### 📁 core

Contiene servicios globales, interceptores, guards y configuraciones generales de la aplicación.

---

### 📁 shared

Componentes reutilizables, directivas, pipes y utilidades compartidas por toda la aplicación.

---

### 📁 features

Contiene las funcionalidades principales de la aplicación.

- Home
- Characters
- Episodes
- Locations
- Profile
- Main

Cada funcionalidad es independiente y contiene sus propios archivos.

---

## ⚙️ Instalación

Clonar el repositorio.

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto.

```bash
cd simpsons-app
```

Instalar las dependencias.

```bash
npm install
```

Ejecutar la aplicación.

```bash
ionic serve
```

---

## 📚 Comandos utilizados

Crear un proyecto Ionic.

```bash
ionic start simpsons-app blank --type=angular --standalone
```

Generar páginas.

```bash
ionic g page features/home
ionic g page features/characters
ionic g page features/episodes
ionic g page features/locations
ionic g page features/profile
ionic g page features/main
```

---

## 🧭 Navegación

La aplicación utiliza:

- Angular Router
- Rutas padre
- Rutas hijas
- Componentes Standalone

La ruta principal es:

```
/main
```

Desde ella se accede a:

```
/main/home
/main/characters
/main/episodes
/main/locations
/main/profile
```

---

## 🎯 Objetivos del proyecto

Durante el desarrollo de esta aplicación se aprenderá a:

- Organizar un proyecto profesional en Ionic.
- Utilizar Angular Standalone.
- Configurar rutas y navegación.
- Crear componentes reutilizables.
- Aplicar buenas prácticas de desarrollo.

---

## 👨‍🏫 Curso

**Desarrollo de Aplicaciones Móviles con Ionic y Angular**

Proyecto utilizado como práctica durante las clases del curso.

---

## 📄 Licencia

Proyecto desarrollado con fines educativos.