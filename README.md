# Tailwind-CSS Food Server

> Initialize project

```bash
# create package.json to manage packages
npm init -y

# install tailwindcss package
npm install tailwindcss

# install live-server to serve site to localhost, which when saved will refresh
npm install live-server -g # -g is optional, it installs live-server globally on the machine
```

Create a folder and files needed.

```
.
├── node-modules
├── public              # where the project is located
│  ├── index.html
│   └── styles.css       # generated from css file in src
├── src
│   └── styles.css       # tailwindcss components are defined here
├── package.json
├── package-lock.json
```

src/styles.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Write a script to generate public/styles.css from src/styles.css in package.json

```json
{
  ...
  "scripts": {
    "build-css": "tailwindcss build -i src/styles.css -o public/styles.css"
  },
  ...
  "dependencies": {
    "tailwindcss": "^2.2.19"
  }
}
```

In terminal, run this.

```bash
npm run build-css
```

Launch Live-server to view live changes on browser.

```bash
live-server public
```
