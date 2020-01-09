# Project creation steps:

## Initial project creation

Use `ng` tool to create the initial angular project

````
ng new material-dialog
````

... and build and serve the project

````
ng serve --port 4300
````

... then open browser your browser on http://localhost:4300/

## Add material to the project

````
ng add @angular/material
````

... you will be prompted to select one of the colour schemes.

## Create basic form

Next we will create a basic form that will contain the button to open the dialog, and display the result of the dialog.  This is done by modifying the `app.component` related files.

As we add the components of the form, we might encounter error like

````
Can't bind to 'ngModel' since it isn't a known property of 'input'.
````

... this happens because we have not yet imported the `FormsModule` into our project.  Do that in `app.module.ts`.  We will also need to inport `ReactiveFormsModule`, and other modules related to the material design  GUI components we are using.

As new modules are added or imported to the project, restart the `ng serve` commmand to generate clean builds.