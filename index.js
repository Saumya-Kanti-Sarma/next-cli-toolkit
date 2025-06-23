#!/usr/bin/env node
import fs from "fs"
import path from "path";
import Templates from "./templates.js"
const input = process.argv[2]

if (!input) process.exit(1);
const baseInput = input.split('-')[0];
const dir = path.join("src", "app", baseInput);
fs.mkdirSync(dir, { recursive: true })

// TSX commands:
if (input && input.includes("-interface-") && input.includes("-no-css")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Templates.interfaceTSX);
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}
//JSX commands:
else if (input && input.includes("-jsx-no-css")) {
  fs.writeFileSync(path.join(dir, "page.jsx"), Templates.plainNoCss);
  console.log("created page.tsx at ", baseInput);
}

// TSX commands:
else if (input && input.includes("-no-css")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Templates.plainNoCss);
  console.log("created page.tsx ", baseInput);
}
// TSX commands:
else if (input && input.includes("-interface")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Templates.interfaceTSX);
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}
//JSX commands:
else if (input && input.includes("-jsx")) {
  fs.writeFileSync(path.join(dir, "page.jsx"), Templates.plainTSX);
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.jsx and page.css at ", baseInput);
}
//TSX commands:
else {
  fs.writeFileSync(path.join(dir, "page.tsx"), Templates.plainTSX);
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}


