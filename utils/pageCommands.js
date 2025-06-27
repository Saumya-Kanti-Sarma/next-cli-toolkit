import fs from "fs"
import path from "path";
import { Page_Template } from "../templates/pages/Page.js";

export default function pageCommand(input, dir, baseInput,) {
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
}