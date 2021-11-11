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

bg-red-100 # Background color
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

> Modifying already defined classes of Tailwind

Run this command to create tailwind.config.js file which can be used to modify already defined classes. And new property can be added too.

```bash
npx tailwindcss init --full # --full includes all classes
```

Above method is not recommended cause it will be hard to distinguish between already defined and custom property we added. Instead we create a blank config file and define new property there.

Rename of delete the above config file and run this command.

```bash
npx tailwindcss init # this will create a blank(not really blank) config file
```

We can now add custom property like this.

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Define new classes/properties here
      colors: {
        primary: "#FF6363",
        secondary: {
          // For shades
          100: "#e2e2d5",
          200: "#888883",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

Now re-build the public/styles.css file in order to use this.

> TailwindCss Extension

[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) provides intellisense in tailwind project as we add classes. It works only if config file is present.
