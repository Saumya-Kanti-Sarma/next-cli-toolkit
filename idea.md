- when a user types: npx nextcli profile/[id]/settings. nextcli should create a folder named profile, inside it a folder named [id], inside it a folder named settings, inside it a file named page.tsx all indie src/app. 

- it should automatically detect if the user is using typescript or javascript. if the user is using typescript, it should create a file named page.tsx and if the user is using javascript, it should create a file named page.jsx

- it should automatically detect if the user is using tailwindcss or not. if the user is using tailwindcss, it should create a file named page.css and if the user is not using tailwindcss, it should not create a file named page.css

- it should automatically detect if the user is using typescript or javascript. if the user is using typescript, it should create a file named page.tsx and if the user is using javascript, it should create a file named page.jsx

- it should automatically detect if the user is using tailwindcss or not. if the user is using tailwindcss, it should create a file named page.css and if the user is not using tailwindcss, it should not create a file named page.css

- it should know if the user is using react (vite) or nextjs. if the user is using react (vite), it should create a file named FileName.tsx inside src/pages/FileName and if the user is using nextjs, it should create a file named page.tsx inside src/app/FileName.

- it should also have a feature to create a component. if the user types: npx nextcli component-name, it should create a folder named component-name inside src/components and a file named component-name.tsx inside src/components/component-name.

- it should also have a feature to create a hook. if the user types: npx nextcli hook-name, it should create a folder named hook-name inside src/hooks and a file named hook-name.tsx inside src/hooks/hook-name.


how to know if the user is using typescript or javascript?

- check for the presence of tsconfig.json file in the root directory. if it exists, the user is using typescript. if it does not exist, the user is using javascript.

how to know if the user is using tailwindcss or not?

- check for the presence of tailwindcss.config.ts file in the root directory. if it exists, the user is using tailwindcss. if it does not exist, the user is not using tailwindcss.

how to know if the user is using react (vite) or nextjs?

- check for the presence of next.config.ts file in the root directory. if it exists, the user is using nextjs. if it does not exist, the user is using react (vite).


step-by-step process of building it.
1. check for framework used by user.
2. check for typescript or javascript.
3. check for tailwindcss or not.
4. create the file.


after all the idntification of codebase. it will generate a file named nextcli.config.json in the root directory. this file will contain the configuration of the codebase.

example of nextcli.config.json:
{
    "framework": "nextjs | react",
    "using_ts": true | false,
    "using_tailwind":true | false,
    "srcPath": "src/pages | src/app",   
}