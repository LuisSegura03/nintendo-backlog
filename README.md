# Mi Backlog Switch

Web estática que ordena mis juegos digitales de Nintendo Switch por nota de Metacritic (versión Switch) para decidir qué jugar primero.

Los juegos se muestran como cajas de Switch en una estantería, agrupados en baldas por nota, estado o género. Al tocar una caja se abre su ficha con descripción, lo bueno y lo malo, duración aproximada y un estado (Pendiente / Jugando / Terminado / Abandonado) que se guarda en el navegador.

## Uso

```bash
python3 -m http.server 8765
```

Abre http://localhost:8765.

## Datos

- `data.js`: listado de juegos, notas, pros y contras (editable).
- `box/`: carátulas oficiales (icono de la eShop de Nintendo), mostradas como caja de Switch.
- Notas de Metacritic consultadas el 26/11/2026.

## Instalar en el móvil

Abre la web publicada y usa "Instalar app" / "Añadir a pantalla de inicio" (Chrome en Android) o Compartir → "Añadir a pantalla de inicio" (Safari en iPhone). Funciona sin conexión con la última versión cargada.
