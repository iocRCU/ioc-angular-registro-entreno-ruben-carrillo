# TTracker

Aplicación de registro de entrenamientos (fuerza, cardio, flexibilidad,
descanso y combinados) con búsqueda reactiva, filtros por categoría,
detalle de cada entrenamiento e historial de búsquedas.
Proyecto Angular 22 para el EAC3 de DA2 OA01 (RA3: integración con
servicios externos y formularios avanzados).

## Versiones

- Node.js 24.15.0 (LTS 24.x)
- npm 11.x
- Angular CLI 22.x / Angular 22.x
- TypeScript 6.0.x
- json-server 0.17.4 (dependencia de desarrollo)

## Branca de trabajo

- Este EAC se desarrolla en la branca `ra3-serveis`.

## Comandas

```bash
npm install        # instalar dependencias
npm run api        # arrancar la API local (json-server, puerto 3000)
ng serve           # arrancar la app en http://localhost:4200
npm test           # tests unitarios
npm run build      # build de producción
```

## API local

- Fichero de datos: `db/entrenamientos.json` (12 entrenamientos).
- URL base: `http://localhost:3000`
- Endpoint principal: `http://localhost:3000/entrenamientos`
- Búsqueda por texto (json-server): `http://localhost:3000/entrenamientos?q=<término>`
- Script: `npm run api` → `json-server --watch db/entrenamientos.json --port 3000`

## Arquitectura

- **Models:** `entrenamiento-api.model.ts` (respuesta API), `entrenamiento.model.ts`
  (modelo interno con tipos `Categoria` y `EstadoEntrenamiento`),
  `entrenamiento.adapter.ts` (adaptador normalizador).
- **Serveis:** `entrenamiento.service.ts` (GET/POST, signals de carga/error/datos,
  `switchMap` para cancelar peticiones pendientes, reintentos).
- **Formularis:** `filter-form` (formulario reactivo con validación síncrona
  `required`/`minLength(3)`, validador asíncrono contra la API con debounce de
  350 ms) e historial de búsquedas en localStorage
  (clave `ttracker_historial_busquedas`, máximo 5, con try/catch).
- **Validators:** `resultado-existe.validator.ts` (comprueba si un término
  tiene resultados en la API).

## Documentación técnica

- `docs/models.md` — tabla de mapatge API → modelo interno y normalizaciones del adaptador.
- `docs/serveis.md` — servicio HTTP, signals y flujos con switchMap.
- `docs/formularis.md` — formulario reactivo, validaciones e historial.
