# cra-template-dataverse-webresource-form

If you want to create a **DataVerse WebResource** that leverages React, Typescript and Fluent UI, the activities and skils needed to setup the project are often much more complicated that the actual implementation of the webresource.

The aim of this package is to automate the activities needed to startup a simple **DataVerse WebResource** project, allowing developers to focus on the actual webresource content.

This package is designed to streamline development of **WebResources embedded into model driven app forms**. For WebResources accessed elsewhere, use [@_neronotte/cra-template-dataverse-webresource](https://www.npmjs.com/package/@_neronotte/cra-template-dataverse-webresource).

## Usage

The package content is a [custom **template** for **create-react-app**](https://create-react-app.dev/docs/custom-templates/).

To start, open a console and type:

``` Console
npx create-react-app <your-webresource-name> --template @_neronotte/cra-template-dataverse-webresource-form
```

Replace `<your-webresource-name>` with the name of your webresource.

Once the template has been installed, move in the `.\<your-webresource-name>` folder and:

1. Change the value of the **title** tag of the `./public/index.html` page to provide a meaningful title for your webresource.
2. Update `./src/App.tsx` file, the entry point of your custom webresource.
3. Calculate the path of the folder where you want to save the build outputs, relative to the one of the current package, search for all the occurrence of the `<output path>` string and replace it with the calculated path (there should be 3 occurrences, one in the `config-overrides.js` file, 3 in the `scripts` section of `package.json` file)

## References

- [Form-based Dataverse Web Resources with React, Typescript and FluentUI](https://dev.to/_neronotte/form-based-dataverse-web-resources-with-react-typescript-and-fluentui-1d44)
- [Webpage (HTML) web resources](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/webpage-html-web-resources?view=op-9-1)
- [GetGlobalContext function and ClientGlobalContext.js.aspx (Client API reference)](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/getglobalcontext-clientglobalcontext.js.aspx)
- [Goodbye HTML Web Resources...](https://dianabirkelbach.wordpress.com/2021/09/29/goodbye-html-web-resources/)