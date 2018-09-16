# Multiple angular applications in a project

This repo is to demonstrate on how you can have multiple angular applications under a project. In this repo we have two main projects, `mycompany.productname.web` and `mycompany.productname.features`. The `mycompany.productname.web` is the main application which loads the `mycompany.productname.features` project within it. The features project can contain multiple applications or modules. Some of the advantages of this approach are:

* Share a common `node_modules` folder across all the feature modules.
* Unit test each feature module individually. This means to be able to run your JS unit tests, linters and as well as run each of the modules individually in the browser.
* This also allows you to package individual applications or modules and install them as `node_modules`. In this example we have packaged `mycompany.productname.features`.

This is because I've configured the [angular.json](https://github.com/kentmz/multiple-angular-apps/blob/master/mycompany.productname.features/angular.json) accordingly in the features project.

In this example the features project consist of two main modules, `mycompany.productname.dashboard` and `mycompany.productname.schedule`. dashboard has a datainsight component and schedule consists of the myschedule and mysettings components. datainsight uses the myschedule component and the web project uses the mysettings of the schedule project. Below illustration might give you a better understanding.

```
mycompany.productname.features
|---- mycompany.productname.dashboard
|	  |-- datainsight
|---- mycompany.productname.schedule
|	  |-- myschedule (used in datainsight)
|      |-- mysettings (used in mycompany.productname.web)
```
Some of the commands that you can run on your feature project are:

* To Build - `ng build <module name>` (module names can be dashboard or schedule)
* To run a specific module in browser - `ng serve <module name> --open` 
* To run your JS unit test - `ng test <module name>`

The features project can also be packaged as a nuget package with specific version and installed on the web project. This is made possible using [ng-packagr](https://www.npmjs.com/package/ng-packagr) in the features project. The [ng-package.json](https://github.com/kentmz/multiple-angular-apps/blob/master/mycompany.productname.features/ng-package.json) and [public_api.ts](https://github.com/kentmz/multiple-angular-apps/blob/master/mycompany.productname.features/public_api.ts) are the two files which is used by `ng-packagr` to create the package.

Once you build the project, say for example the features project, it creates a dist folder with all the build output files. In order to prepare the build output for packaging you then run the command `npm run packager`. Then lastly, you go to the dist folder and then run `npm pack`. This will create a package file, something like `mycompany.productname.features-0.0.1.tgz`. You can see the version number in the file name. This version number is the version you specify in your [package.json](https://github.com/kentmz/multiple-angular-apps/blob/master/mycompany.productname.features/package.json). You can now use `mycompany.productname.features-0.0.1.tgz` to install it as a `node_modules` on the `mycompany.productname.web` project.

Below screenshot shows `mycompany.productname.features` installed in the `node_modules` folder and corresponding entry made in the `package.json` of the `mycompany.productname.web` project.

![features project in node_modules](https://github.com/kentmz/multiple-angular-apps/blob/master/screenshots/node.png?raw=true)

![entry in package.json](https://github.com/kentmz/multiple-angular-apps/blob/master/screenshots/web-package-json.png?raw=true)

Hope this gives you an idea on how you can have multiple applications in a project and help you modularize your application.


**Thank you!**






