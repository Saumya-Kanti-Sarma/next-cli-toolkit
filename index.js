#!/usr/bin/env node
import fs from "fs"
import path from "path";
import Templates from "./templates.js"
const input = process.argv[2]

if (!input) {
  console.log(
    `
Commands:
  route                 → Create page.tsx + page.css
  route-no-css          → Create page.tsx only
  route-interface       → page.tsx with interface + page.css
  route-interface-no-css → page.tsx with interface only
  route-jsx             → Create page.jsx + page.css
  route-jsx-no-css      → Create page.jsx only

Examples:
  procli home/about                → Create page.tsx + page.css at src/app/home/about
  procli blog/[slug]               → Create page.tsx + page.css at src/app/blog/[slug]
  procli dashboard/user-no-css     → Create page.tsx only at src/app/dashboard
  procli post/[id]-jsx             → Create page.jsx + page.css at src/app/post/[id]
  procli data-interface-no-css     → Create page.tsx only at src/app/data

Notes:
  - This works with App Router structure (Next.js 13+)
  - Make sure /src/app/ exists in your project

Use globally:
  npm install -g @saumya-sarma/procli
  procli blog/[slug]

Use locally:
  npm install -D @saumya-sarma/procli
  create run script at package.json
  npm run procli blog/[slug]

For more information go to https://www.npmjs.com/package/@saumya-sarma/procli

Made by: Saumya Sarma
    instagram: https://www.instagram.com/developer_saumya
    linkedin: https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/
    X: https://x.com/devloper_saumya
    github: https://github.com/Saumya-Kanti-Sarma/




project repository: https://github.com/Saumya-Kanti-Sarma/procli
`);

  process.exit(1)
};
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


