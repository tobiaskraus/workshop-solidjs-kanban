# SolidJS Workshop

We want to start a Kanban Board website with SolidJS and learn the UI library while doing.

## Intro

As a good teaser I recommend watching the first 1:30 min of [Jack Herrington: React vs SolidJS, Fight!](https://www.youtube.com/watch?v=OqcHoLWyyIw).

What is SolidJS?

-   UI library similar to React
    -   same language: JS/TS with JSX/TSX Syntax
    -   similar component structure like React Function Routing (newer React)
    -   similar component structure like React Function Data (newer React)
    -   it allows Server Side Rendering (and is supposed to be really good in it)
-   different to React:
    -   creates a faster application
    -   Reactive & precompiled - no Virtual DOM (like Svelte)
        -   every function component runs only once. Template reacts automatically to changes thanks to Observables
    -   it's newer: (1.0.0): 2021-06-27 / (0.2.0): 2018-11-13
-   find out more: https://www.solidjs.com/

## Clone this repo

```sh
git clone git@github.com:tobiaskraus/workshop-solidjs-kanban.git
cd workshop-solidjs-kanban
```

## How to follow

I explained something too confusing or too fast?

You can jump straight to the "solution" of each chapter:

```sh
git checkout {chapter-name}
```

## Let's start!

-   [1. Chapter Setup](_workshop-docu/1_Chapter_Setup.md)
-   [2. Start](_workshop-docu/2_Start.md)
-   [3. Chapter_States](_workshop-docu/3_States.md)
-   [4. Chapter_Layout](_workshop-docu/4_Chapter_Layout.md)
-   [5. Chapter_Components](_workshop-docu/5_Chapter_Components.md)
-   [6. Chapter_Routing](_workshop-docu/6_Chapter_Routing.md)
-   [6. Chapter_Routing](_workshop-docu/6_Chapter_Routing.md)
-   [7. Chapter_Data](_workshop-docu/7_Chapter_Data.md)
-   [Differences_To_React](_workshop-docu/Differences_To_React.md)

## Want to dive deeper?

-   [YouTube: "React vs SolidJS, Fight!" from Jack Herrington (2021-08-11) - 36:28](https://www.youtube.com/watch?v=OqcHoLWyyIw)
    -   transforms a React website to SolidJS and covers the main points and benefits in real code example
-   [solidjs.com: Tutorial](https://www.solidjs.com/tutorial/introduction_basics)
