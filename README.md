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

Now we can define classes already defined in Tailwind to use those style in html.

> Text and Colors

```
text-gray-700 # grey text with more opacity or shade
text-xl # small text
text-6xl # big text

font-bold # bold text
font-semibold $ semibold text

uppercase # uppercase the text
```

> Margin, Border and Padding

```
p-4 # padding of 4px in all sides
px-4 # padding of 4px in x-axis
py-4 # padding of 4px in x-axis
pt-4 # padding of 4px at the top, similar for other sides

m-4 # margin of 4px in all sides
mt-4 # margin of 4px at the top, similar for other side

border-4 # 4px border
border-gray-100 # gray colored border with less opacity
```
