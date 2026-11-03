# TTracker

## Autor/a

Ruben Carrillo

## Descripción

Aplicación de seguimiento de entrenamientos con registro de ejercicios, volúmenes, cargas y tiempos. Permite gestionar variantes de ejercicios y mantener un historial de progresión.

## Versiones utilizadas

| Herramienta | Versión |
|-------------|---------|
| Angular | 22.2.2 |
| TypeScript | 6.0.x |
| Node.js | 24.15.0 |
| npm | 11.12.1 |
| Git | Latest |

## Cómo crear y ejecutar el proyecto

### Requisitos previos

- Node.js 24.15.0 o superior
- npm 11.12.1 o superior
- Git

### Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/iocRCU/ioc-angular-registro-entreno-ruben-carrillo.git
   cd ioc-angular-registro-entreno-ruben-carrillo
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en desarrollo:

   ```bash
   ng serve
   ```

4. Construir para producción:

   ```bash
   ng build
   ```

5. Ejecutar tests:

   ```bash
   ng test
   ```

Accede a http://localhost:4200/.

## Ramas del proyecto

| Rama | Descripción |
|------|-------------|
| `main` | Versión inicial |
| `ra1-setup` | Configuración base EAC1 |
| `ra2-components` | **Componentes e interfaz EAC2** (rama de revisión) |
| `ra3-serveis` | Servicios (pendiente) |
| `ra4-navegacion` | Navegación (pendiente) |

## Componentes creados (EAC2)

| Componente | Archivo | Responsabilidad |
|------------|---------|-----------------|
| `app-entrenamiento-list` | `src/app/components/entrenamiento-list/entrenamiento-list.component.ts` | Renderiza el listado y emite la selección de un elemento |
| `app-entrenamiento-card` | `src/app/components/entrenamiento-card/entrenamiento-card.component.ts` | Muestra el detalle del elemento seleccionado |
| `app-tag-badge` | `src/app/components/tag-badge/tag-badge.component.ts` | Etiqueta de categoría con estilo propio |
| `app-filter-form` | `src/app/components/filter-form/filter-form.component.ts` | Gestiona los filtros y sus validaciones |

## Otros archivos relevantes

| Archivo | Contenido |
|---------|-----------|
| `src/app/models/entrenamiento.model.ts` | Interfaz `Entrenamiento` |
| `src/app/models/entrenamientos.mock.ts` | Datos mock (12 elementos) |
| `src/app/models/filtro.model.ts` | Interfaz `FiltroEntrenamientos` |
| `src/app/pipes/formatted-date.pipe.ts` | Pipe `formattedDate` para dar formato a las fechas |

## Comandos disponibles

| Comando | Acción |
|---------|--------|
| `npm install` | Instala las dependencias |
| `ng serve` | Sirve la aplicación en desarrollo |
| `ng build` | Construye el proyecto para producción |
| `ng test` | Ejecuta los tests |