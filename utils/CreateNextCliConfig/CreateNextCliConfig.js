import fs from "fs";

export default function CreateNextCliConfig() {
  const packageJSON = JSON.parse(fs.readFileSync("./package.json", "utf8"));
  const configFile = {
    using_nextjs: null,
    using_typescript: null,
    using_tailwind: null
  }

  configFile.using_typescript = "typescript" in packageJSON.devDependencies;
  configFile.using_tailwind = "tailwindcss" in packageJSON.devDependencies;
  configFile.using_nextjs = "next" in (packageJSON.dependencies ?? {});

  fs.writeFileSync("./nextcli.config.json", JSON.stringify(configFile))
}