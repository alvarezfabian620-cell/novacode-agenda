# NovaCode Agenda - Royal Midnight Edition

Este proyecto es una aplicación de gestión de agenda desarrollada con **Laravel** (Backend) y **Angular** (Frontend), enfocada en una estética premium denominada "Royal Midnight" utilizando **Sass (SCSS)** únicamente (sin Tailwind).

## Requisitos Previos

- PHP 8.2+
- Composer
- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

## Estructura del Proyecto

- `/backend`: API Laravel.
- `/frontend`: Aplicación Angular SPA.
- `/_backup`: Respaldo de archivos originales.

## Instalación y Configuración

### Backend (Laravel)

1. Navega a la carpeta backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   composer install
   ```
3. Configura el archivo `.env` (ya configurado para SQLite por defecto).
4. Ejecuta las migraciones y el seeder:
   ```bash
   php artisan migrate --force
   php artisan db:seed --class=UserSeeder
   ```
5. Inicia el servidor:
   ```bash
   php artisan serve
   ```

### Frontend (Angular)

1. Navega a la carpeta frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

## Credenciales de Acceso (Test)

- **Email:** `admin@nova.com`
- **Password:** `password123`

## Tecnologías Utilizadas

- **Backend:** Laravel 11/12 (Sanctum para Auth).
- **Frontend:** Angular 19 (Standalone Components).
- **Estilos:** Sass (SCSS) con arquitectura de variables personalizada.
- **Iconos:** FontAwesome 6.
- **Tipografía:** Inter (Google Fonts).
