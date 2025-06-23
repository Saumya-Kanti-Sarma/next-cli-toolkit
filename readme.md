# ProCLI — Next.js Page Generator

A fast, simple, and minimal CLI tool to generate Next.js route pages with `.tsx`, `.jsx` and `.css` files in one command — just like NestJS generators!

## Features

- ✅ Instantly create route folders like `user/[id]`
- ✅ Generates `page.tsx`, `page.jsx` and `page.css` files
- ✅ Comes with boilerplate code
- ✅ Perfect for Next.js 13+ with App Router projects


## ⚙️ Usage

### step 01: Download the package
```bash
npm install @saumya-sarma/procli
```
### step 02: at the root terminal type
```bash
procli home/[id] 
```
### This will generate:

```
/src/app/home/[id]/page.tsx
/src/app/home/[id]/page.css
```

---

##  Generated `page.tsx` Example:

```tsx
"use client";
import "./page.css"

const Page = () => {
  return (
    <>
    </>
  );
};

export default Page;
```

Available commands: 
| Command                              | Output                                                         |
| ------------------------------------ | -------------------------------------------------------------- |
| `procli your/route`                  | Generates `page.tsx` and `page.css`                            |
| `procli your/route-no-css`           | Generates `page.tsx` only                                      |
| `procli your/route-interface`        | Generates `page.tsx` with interface boilerplate and `page.css` |
| `procli your/route-interface-no-css` | Generates `page.tsx` with interface only                       |
| `procli your/route-jsx`              | Generates `page.jsx` and `page.css`                            |
| `procli your/route-jsx-no-css`       | Generates `page.jsx` only                                      |


---

## 👨‍💻 Author

Built with 💙 by **Saumya Sarma**

* [Instagram](https://instagram.com/saumya__sarma)
* [LinkedIn](https://www.linkedin.com/in/saumya-sarma/)
* [GitHub](https://github.com/Saumya-Kanti-Sarma/)
* [NPM Package](https://www.npmjs.com/package/@saumya-sarma/procli)
* [Project Repository](https://github.com/Saumya-Kanti-Sarma/procli)

---

## 📄 License

**MIT License** — Free for personal and commercial use.

```
