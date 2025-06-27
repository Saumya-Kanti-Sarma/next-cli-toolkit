#!/usr/bin/env node
import fs from "fs"
import path from "path";
import { Page_Template } from "./templates/pages/Page.js";
import pageCommand from "./utils/pageCommands.js";
import commands from "./utils/commands.js";
const input = process.argv[2]

if (!input) {
  const command = commands();
  console.log(command);
  process.exit(1)
};
const baseInput = input.split('-')[0];
const dir = path.join("src", "app", baseInput);
fs.mkdirSync(dir, { recursive: true })

// TSX commands:
pageCommand(input, dir, baseInput)


