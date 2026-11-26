# Mi Backlog Switch

Web estática que ordena mis juegos digitales de Nintendo Switch por nota de Metacritic (versión Switch) para decidir qué jugar primero.

Cada juego muestra carátula, descripción, lo bueno y lo malo, duración aproximada y un estado (Pendiente / Jugando / Terminado / Abandonado) que se guarda en el navegador.

## Uso

```bash
python3 -m http.server 8765
```

Abre http://localhost:8765.

## Datos

- `data.js`: listado de juegos, notas, pros y contras (editable).
- `covers/`: carátulas.
- Notas de Metacritic consultadas el 26/11/2026.
