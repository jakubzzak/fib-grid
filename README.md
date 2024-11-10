# Fib Grid

Welcome to this new Fibonacci puzzle.

## Goal

Aim for the best possible ratio between clicks ⬆️ and hits ⬇️.

`click` is an action triggered by pressing one of the cells in the grid. Each
click causes neighboring\* cells to be incremented by 1.

`hit` counts as a click that, caused by incrementing neighboring\* cells, ends
up forming a sequence of 4+ fibonacci numbers

\*neighboring = all cells in the same row and column

## Maintenance

The idea of writing this app in TS + React came naturally, due to the desire of
having a visual representation of the problem.

Since the requirements were not strict as long as the core idea was preserved,
I've decided to use emerging tools that I am not so confident working with yet.
`Deno` and `Vite` are fairly new to me and I like to try new frameworks/tools
whenever the opportunity arises. With this said, there was a significant amount
of time invested into setup and understanding of these two frameworks due to the
learning curve.

### Run

```bash
deno task preview
```

### Development

```bash
deno task dev
```

### Test

```bash
deno test
```

## Next Steps

As it usually goes resources are sadly limited. Here is a snapshot of my
thoughts of how I would continue improving this prototype.

### Product

- Disable clicking during the visuals, until next move
- Change clicks/hits into money 💰, for each sell that is incremented the player
  gains +1€ added to their wallet 📈, but each time they get fibonacci sequence
  cleared from the grid the sum of all numbers removed is deducted 📉 from the
  wallet. The game is over as soon as the player is in debt.
- Make the UI more visually appealing, use better color pallet and explain
  better, show metadata such as moves & transactions
- Introduce leaderboard of the most successful players

### Tech

- Introduce FE e2e tests to test the correct behavior of buttons
- Containerize and prepare for deployment
- Support product discovery & deliver
