#!/usr/bin/env node
import fs from "fs"
import path from "path";
import { Page_Template } from "./templates/pages/Page.js";
const input = process.argv[2]

if (!input) {
  console.log(
    `
Available commands: 
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| nextcli your/route                   | Generates page.tsx and page.css                                |
| nextcli your/route-no-css            | Generates page.tsx only                                        |
| nextcli your/route-interface         | Generates page.tsx with interface boilerplate and page.css     |
| nextcli your/route-interface-no-css  | Generates page.tsx with interface only                         |
| nextcli your/route-jsx               | Generates page.jsx and page.css                                |
| nextcli your/route-jsx-no-css        | Generates page.jsx only                                        |

Examples:
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
|  nextcli home/about                  | Create page.tsx + page.css at src/app/home/about               |
|  nextcli blog/[slug]                 | Create page.tsx + page.css at src/app/blog/[slug]              |
|  nextcli dashboard/user-no-css       | Create page.tsx only at src/app/dashboard                      |
|  nextcli post/[id]-jsx               | Create page.jsx + page.css at src/app/post/[id]                |
|  nextcli data-interface-no-css       | Create page.tsx only at src/app/data                           |

For more information go to https://www.npmjs.com/package/next-cli-toolkit

Made by: Saumya Sarma https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/
`);

  process.exit(1)
};
const baseInput = input.split('-')[0];
const dir = path.join("src", "app", baseInput);
fs.mkdirSync(dir, { recursive: true })

// TSX commands:
if (input && input.includes("-interface-") && input.includes("-no-css")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Page_Template(baseInput, false, true));
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}
//JSX commands:
else if (input && input.includes("-jsx-no-css")) {
  fs.writeFileSync(path.join(dir, "page.jsx"), Page_Template(baseInput, false, false));
  console.log("created page.tsx at ", baseInput);
}

// TSX commands:
else if (input && input.includes("-no-css")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Page_Template(baseInput, false, false));
  console.log("created page.tsx ", baseInput);
}
// TSX commands:
else if (input && input.includes("-interface")) {
  fs.writeFileSync(path.join(dir, "page.tsx"), Page_Template(baseInput, true, true));
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}
//JSX commands:
else if (input && input.includes("-jsx")) {
  fs.writeFileSync(path.join(dir, "page.jsx"), Page_Template(baseInput, true, false));
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.jsx and page.css at ", baseInput);
}
//TSX commands:
else {
  fs.writeFileSync(path.join(dir, "page.tsx"), Page_Template(baseInput, true, false));
  fs.writeFileSync(path.join(dir, "page.css"), "");
  console.log("created page.tsx and page.css at ", baseInput);
}


