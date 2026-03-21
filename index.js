#!/usr/bin/env node
import CreateNextCliConfig from "./utils/CreateNextCliConfig/CreateNextCliConfig.js";
const input = process.argv[2];

// if input is "init" then run init.js
if (input == "init" || input == "start" || input == "config") CreateNextCliConfig();

// if input is "page" then run page.js
// if input is "component" then run component.js

