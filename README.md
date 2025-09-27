# Sprint 4. Open Trivia App - IT Academy Frontend Course

## 🎯 Objectives

The objective in this repo is to manage different APIs and manage the interactions between them.
The APIs implemented are the following:

- To load trivia questions, **Open Tribia DB (OTDB)**  (https://opentdb.com/)
- When failing an answer randomly, an insult or a motivational quote will display. To manage responses when failing a question, it has been used:
  - **LibInsult** (https://insult.mattbas.org/)
  - **Quotable API** (https://api.quotable.io)
- To show the current weather in our location **Open Meteo API** (https://open-meteo.com/) is the option chosen.

## Requeriments

### Level 1
- [X] When the APP starts, the first question should appear on screen.
- [X] Once the question is answered, the app should fetch another question.
- [X] An array will be saving the info of the already answered questions.
## Level 2
- [X] To add more functionality, the weather info of the current location should be displayed.
- [X] It should be two APIs that are fetched depending on a random factor.
## Level 3
- [X] Create a compelling UI to have a smoother experiense.

## 🖥️ Preview of the project

// Will go the video here

## 🛠️ Stack used
- 🚀 **Astro**
- 🎨 **Tailwind**
- 🟡 **JavaScript**

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run test`             | Run jest suite tests   |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
