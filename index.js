#!/usr/bin/env node
import fs from "fs"
import path from "path";
import pageCommand from "./utils/pageCommands.js";
import commands from "./utils/commands.js";
import componentCommands from "./utils/componentCommands.js";
const input = process.argv[2]

if (!input) {
  const command = commands();
  console.log(command);
  process.exit(1)
};
const baseInput = input.split('-')[0];

// page commands:
if (!input.includes("-comp")) {
  const dir = path.join("src", "app", baseInput);
  fs.mkdirSync(dir, { recursive: true });
  pageCommand(input, dir, baseInput)
};

// component commands:
componentCommands(input, baseInput)


