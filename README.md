# cra-template-dataverse-webresources

NPM package to scaffold React+Typescript WebResources for Power Apps / Dynamics 365 CE

## 🔗 Useful links

[Tutorial](https://butenko.pro/2020/04/22/development-of-custom-html-js-webresources-with-help-of-modern-frameworks/) on how to manually tweak the webpack.config.js.

[Tutorial on React App Rewired](https://egghead.io/lessons/react-customize-create-react-app-cra-without-ejecting-using-react-app-rewired), that seems to be the easiest way to generate a "working" build that actually can be deployed on CRM.

[How to create the cra-template](https://create-react-app.dev/docs/custom-templates/)

[How to publish the cra-template](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## 🧪 Testing a template

To test a template locally, pass the file path to the directory of your template source using the `file:` prefix.

```Powershell
npx create-react-app my-app --template file:../path/to/your/template/cra-template-[template-name]
```

For instance, if you're in the `samples` folder, you can type

```Powershell
npx create-react-app app03 --template file:../templates/cra-template-dataverse-webresource 
```

## 👷🏻‍♂️ How to manually publish the package

- open a powershell terminal into /templates/cra-template-dataverse-webresource
- update the version number in `package.json` file
- type

```Powershell
npm publish --access public
```

The same steps are done automatically on `/.boostrapper/publish.ps1`.
