# PrimeRevenue Flowbite/TailwindCSS POC

![primerevenue](https://primerevenue.com/wp-content/uploads/2019/03/PrimeRevenue-logo-color-250x69.png)

React + Vite + Flowbite React + TailwindCSS + Chart.js, with HMR and some ESLint rules.

## 🔗 Demo

https://flowbite-react-tailwindcss-vite-dashboard.vercel.app/

## 📋 Requirements

* Node (developed on v20.18.1)

## 💾 Installation

1. Clone the repository: `git clone git@github.com:talpitoo/flowbite-react-tailwindcss-vite-dashboard.git`
2. Navigate to the project directory: `cd flowbite-react-tailwindcss-vite-dashboard`
3. Install dependencies: `npm install`

## 📝 Usage

- Run the development server: `npm run dev`
- Build for production: `npm run build`

The site will be available at `http://localhost:5173/` during development.

## 📦 Dependencies

- Flowbite React
- React
- TailwindCSS
- Chart.js

## 🎴 Icons

https://react-icons.github.io/react-icons/icons/hi/

Please note that in case you are using a larger icon (16px) than the button text (14px), offset its margins so that the icon won't make the button height larger, e.g.

```
<Button size="sm">
  <HiQuestionMarkCircle className="-my-px mr-2 size-4" />
  Open Modal
</Button>
```

## 🥿 CSS

We are using Flowbite React components with this theming strategy: https://flowbite-react.com/docs/customize/theme#option-2-create-a-custom-theme. In case that is not enough, add additional/inline class names into the markup:

1. Copy-paste an existing component e.g. https://flowbite-react.com/docs/components/button into the markup.
2. Copy-paste its full theme https://flowbite-react.com/docs/components/button#theme into `src/themes/primeRevenueFlowbiteTheme.js` or just the parts you want to override e.g.

```
button: {
    color: {
      "success": "text-white bg-accent-green-two",
      "prime-revenue-cta": "text-white bg-accent-blue-one",
    },
  },
```

3. Now you can use this new type as `<Button color="prime-revenue-cta">CTA</Button>` or the overriden `<Button color="success">Save</Button>`.
4. In case more customization is needed, you can add inline classes like `<Button color="prime-revenue-cta" className="px-8 py-4">CTA</Button>`.
5. Since **Flowbite React** components have their inner DOM structure, sometimes the above solution is not enough, the classes you have provided aren't being added to the right HTML tag. In such cases you can come up with a solution of external CSS overrides, but it is better to notify the designer and disucss whether such 'hacks' are worth the effort.

## 🧪 Expanding the ESLint configuration

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
