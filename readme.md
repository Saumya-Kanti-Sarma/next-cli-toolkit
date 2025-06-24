# ProCLI — Next.js Page Generator

A fast, simple, and minimal CLI tool to generate Next.js route pages with `.tsx`, `.jsx` and `.css` files in one command — just like NestJS generators!

## Features

- ✅ Instantly create route folders like `user/[id]`
- ✅ Generates `page.tsx`, `page.jsx` and `page.css` files
- ✅ Comes with boilerplate code
- ✅ Perfect for Next.js 13+ with App Router projects


## ⚙️ Usage

### step 01: install the package as dev depedency
```bash
npm install -D @saumya-sarma/procli
```
### step 02: In their package.json, add:
```json
"scripts": {
  "procli": "procli"
}
```
### step 03: Now you can run:

```bash
npm run procli home/[id]
```

### This will generate page.tsx and page.css at:

```bash
/src/app/home/[id]/page.tsx
/src/app/home/[id]/page.css
```

---

##  The generated `page.tsx` will look like this:

```tsx
"use client";
import "./page.css"

const Page = () => {
  return (
    <>
    this is home/[id]
    </>
  );
};

export default Page;
```

Available commands: 
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| procli your/route                  | Generates page.tsx and page.css                            |
| procli your/route-no-css           | Generates page.tsx only                                      |
| procli your/route-interface        | Generates page.tsx with interface boilerplate and page.css |
| procli your/route-interface-no-css | Generates page.tsx with interface only                       |
| procli your/route-jsx              | Generates page.jsx and page.css                            |
| procli your/route-jsx-no-css       | Generates page.jsx only                                      |


---
## Additionally you can download it globally:

```bash
npm install -g @saumya-sarma/procli
```
and you can use procli in any directory. Just use the command:
```bash
procli your/route
```
---
## 👨‍💻 Author

Built with 💙 by **Saumya Sarma**

* [Instagram](https://www.instagram.com/developer_saumya)
* [LinkedIn](https://www.linkedin.com/in/saumya-sarma-2ab6a52a4/)
* [X](https://x.com/devloper_saumya)
* [GitHub](https://github.com/Saumya-Kanti-Sarma/)
* [NPM Package](https://www.npmjs.com/package/@saumya-sarma/procli)
* [Project Repository](https://github.com/Saumya-Kanti-Sarma/procli)

---

**MIT License** — Free for personal and commercial use.

```
