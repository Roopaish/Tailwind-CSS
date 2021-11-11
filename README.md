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
│  ├── index.html       # html file to work on
│  └── styles.css       # generated from css file in src
├── src
│   └── styles.css      # tailwindcss components are defined here
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
font-mono # font family

uppercase # uppercase the text

bg-red-100 # Background color

tracking-wider # letter-spacing
```

> Margin, Border and Padding

```
p-4 # padding of 1rem/16px in all sides
px-4 # padding of 1rem/16px in x-axis
py-4 # padding of 1rem/16px in x-axis
pt-4 # padding of 1rem/16px at the top, similar for other sides

m-4 # margin of 1rem/16px in all sides
mt-4 # margin of 1rem/16px at the top, similar for other side

border-4 # 1rem/16px border
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

> Custom font

Import the font in src/styles.css

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update tailwind config file and re-build css.

```js
theme: {
  extend: {
    ...
    fontFamily: {
        body: "Nunito",
      },
  }
  ...
}
```

`font-body` is the property to use this font.

> FlexBox, height and width

```
flex # display:flex;
justify-between # justify-content: space-between;
justify-end # justify-content: flex-end;
justify-center # justify-content: center;

justify-items-center # justify-items: center;

items-center # align-items: center;
items-start # align-items: start;

h-4 # height of 8px
w-4 # width of 8px
```

> Media Queries, Responsive classes

```
bg-red-500 # red background for all devices, all + mobile
sm:bg-green-500 # green bg for smaller devices, tablet
md:bg-blue-500 # blue bg for medium sized devices, tablet in landscape
lg:bg-pink-500 # pink bg for larger devices, laptop
xl:bg-teal-500 # teal bg for extra-large devices, desktop
```

> Tip

It's hard to remember all classes. So to use some css styling and if you don't know the class name, with Tailwind CSS IntelliSense extension on VSCode, we can just type the property or property's value and it will auto-complete for us.

Example: If we want to setup object-fit: cover; as you type cover or object, intellisense will suggest some classes. This works most of the time cause tailwind's classes are mostly name after the property or property's value.

> Cover, Radius, Overflow, Position

```
object-cover # object-fit: cover;
block # display: block;
rounded # slightly rounded corners
rounded-full # fully rounded corners
overflow-hidden # overflow: hidden;
shadow-md # medium strength shadow
relative # position: relative;
top-0 # top: 0;
```

> @apply, add all tailwind classes to one class

In src/styles.css, add a selector and use @apply to add different tailwind classes. Generate public/styles.css afterward.

```css
/* To use it add class card in html element */
.card {
  @apply bg-white rounded overflow-hidden shadow-md relative;
}
```

> Grid, Hover

```
grid # display: grid;
cols-span-1 # grid-column: span 1 / span 1

hover:shadow-inner # when hover, make inset shadow
```
