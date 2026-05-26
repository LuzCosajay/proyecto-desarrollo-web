# Proyecto Desarrollo de Aplicaciones Web - Semana 6

Frontend desarrollado con React, TypeScript y Vite para la aplicación To Do List.

## Rama final

```bash
git checkout semana6
```

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Zustand
- Bootstrap
- Docker
- Nginx

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/LuzCosajay/proyecto-desarrollo-web
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm run dev
```

## Docker

Construir imagen:

```bash
docker build -t frontend-todolist .
```

Ejecutar contenedor:

```bash
docker run -d -p 8080:80 --name frontend-todolist-container frontend-todolist
```

Abrir en navegador:

```text
http://localhost:8080
```

## Funcionalidades

- Agregar tareas
- Eliminar tareas
- Agregar metas
- Eliminar metas
- Integración con backend
- Persistencia de datos
- Dockerización del frontend

## Autor

Luz Belén Cosajay Campos