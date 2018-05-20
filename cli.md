# CLI

I want to learn how to make my own cli tool, So i go to look [create-react-app] and [vue-cli] for example.

## **vue-cli**

[vue-cli] is created by [yyx], who have created [vue].

this cli use [commander] as base command-line interface.

```javascript
const program = require("commander");
program
  .command("create <app-name>")
  .description("create a new project powered by vue-cli-service")
  .option(
    "-p, --preset <presetName>",
    "Skip prompts and use saved or remote preset"
  )
  .option("-d, --default", "Skip prompts and use default preset")
  .option(
    "-i, --inlinePreset <json>",
    "Skip prompts and use inline JSON string as preset"
  )
  .option(
    "-m, --packageManager <command>",
    "Use specified npm client when installing dependencies"
  )
  .option(
    "-r, --registry <url>",
    "Use specified npm registry when installing dependencies (only for npm)"
  )
  .option(
    "-g, --git [message]",
    "Force / skip git intialization, optionally specify initial commit message"
  )
  .option("-f, --force", "Overwrite target directory if it exists")
  .option("-c, --clone", "Use git clone when fetching remote preset")
  .option("-x, --proxy", "Use specified proxy when creating project")
  .action((name, cmd) => {
    require("../lib/create")(name, cleanArgs(cmd));
  });
```

use [inquirer] as interactive command

```javascript
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "confirm",
      message: inPlace
        ? "Generate project in current directory?"
        : "Target directory exists. Continue?",
      name: "ok"
    }
  ])
  .then(answers => {
    if (answers.ok) {
      run();
    }
  })
  .catch(logger.fatal);
```

## basement

use [metalsmith] as static file management

```javascript
const Metalsmith = require("metalsmith");

const metalsmith = Metalsmith(path.join(src, "template"));
```

> instance.use

```javascript
```

## template

use [handlerbars] as template, intergrated with metalsmith.

```javascript
const Handlebars = require("handlebars");

// register handlebars helper
Handlebars.registerHelper("if_eq", function(a, b, opts) {
  return a === b ? opts.fn(this) : opts.inverse(this);
});

Handlebars.registerHelper("unless_eq", function(a, b, opts) {
  return a === b ? opts.inverse(this) : opts.fn(this);
});
```

## create-react-app

[create-react-app]: https://github.com/facebook/create-react-app
[vue-cli]: https://github.com/vuejs/vue-cli
[yyx]: https://github.com/yyx990803
[vue]: https://github.com/vuejs/vue
[commander]: https://www.npmjs.com/package/commander
[inquirer]: https://www.npmjs.com/package/inquirer
[metalsmith]: https://www.npmjs.com/package/metalsmith
[handlerbars]: http://handlebarsjs.com
