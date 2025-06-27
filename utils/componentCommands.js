import fs from "fs";
import Component_template from "../templates/components/Component.js";
import path from "path";

//nextcli navbar-comp
export default function componentCommands(input = "", baseInput = "") {
  if (input && input.includes("-comp")) {
    const fileName = baseInput[0].toLocaleUpperCase() + baseInput.replace(baseInput[0], "");
    const dir = path.join("src", "component", fileName);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${fileName}.jsx`), Component_template(fileName), "utf-8");
    fs.writeFileSync(path.join(dir, `${fileName}.css`), "");
    console.log(`${fileName}.jsx & ${fileName}.css component created at ${dir}`)
  };
};