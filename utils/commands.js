export default function commands() {
  return (
    `Available commands: 
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| nextcli your/route                   | Generates page.tsx and page.css                                |
| nextcli your/route-no-css            | Generates page.tsx only                                        |
| nextcli your/route-interface         | Generates page.tsx with interface boilerplate and page.css     |
| nextcli your/route-interface-no-css  | Generates page.tsx with interface only                         |
| nextcli your/route-jsx               | Generates page.jsx and page.css                                |
| nextcli your/route-jsx-no-css        | Generates page.jsx only                                        |
|                 new                  |                                                                |
| nextcli <componentName>-comp         | Generates Component.jsx and Component.css at src/components    |

Examples:
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
|  nextcli home/about                  | Create page.tsx + page.css at src/app/home/about               |
|  nextcli blog/[slug]                 | Create page.tsx + page.css at src/app/blog/[slug]              |
|  nextcli dashboard/user-no-css       | Create page.tsx only at src/app/dashboard                      |
|  nextcli post/[id]-jsx               | Create page.jsx + page.css at src/app/post/[id]                |
|  nextcli data-interface-no-css       | Create page.tsx only at src/app/data                           |
|                 new                  |                                                                |
| nextcli navbar-comp                  | Generates Navbar.jsx and Navbar.css at src/Components/Navbar   |

For more information go to https://www.npmjs.com/package/next-cli-toolkit

Made by: Saumya Sarma https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/`
  )
}