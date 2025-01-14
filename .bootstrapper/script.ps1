
# this powershell script contains the commands to create a new react app with typescript and fluent ui from scratch
# the script is intended to be run from the root of the project folder
# it is the baseline to create the templates

# If you've previously installed create-react-app globally via 
# npm install -g create-react-app
# we recommend you uninstall the package using 
# npm uninstall -g create-react-app or yarn global remove create-react-app 
# to ensure that npx always uses the latest version.

$appName = "app01"

npx create-react-app $appName --template typescript
cd $appName

# this version of react is the one used by PCF as of #2025-01-14
npm install react@18.3.1 react-dom@18.3.1 
npm install typescript@4.9.5 --save-dev
npm install @fluentui/react @fluentui/react-components
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin sass sass-loader style-loader url-loader ts-loader webpack webpack-cli webpack-dev-server --save-dev

del .\src\app.test.tsx
del .\src\logo.svg
del .\src\setupTests.ts
del .\src\react-app-env.d.ts
del .\src\reportWebVitals.ts
del .\src\index.css

del .\public\favicon.ico
del .\public\logo192.png
del .\public\logo512.png
del .\public\manifest.json
del .\public\robots.txt

xcopy ..\.bootstrapper\index.txt .\src\index.tsx /Y  