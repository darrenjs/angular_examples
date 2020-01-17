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

## Create a dialog component

Next step is to create a component for the modal dialog.  We will then link it up to the button on the main form, so that the dialog is opened when the button is pressed.

To create a new component, use the cli tool:

````
ng generate component modal-dialog
````

This creates a skeleton component, which is not very interesting for a dialog.  So we will add some basic dialog structure.  Note the use of attributes `mat-dialog-title`, `mat-dialog-content` and `mat-dialog-actions` to indicate the dialog specific content.

````html
<h1 mat-dialog-title>Modal Dialog</h1>
<div mat-dialog-content>
  <p>{{message}}</p>
</div>
<div mat-dialog-actions>
  <button mat-raised-button (click)="onCancelClick()">Cancel</button>
  <button mat-raised-button color="primary" (click)="onSubmitClick()" cdkFocusInitial>Submit</button>
</div>
````

To use these attributes we need to import the Material Dialog module in `app.module.ts`

````typescript
import { MatDialogModule } from '@angular/material/dialog';

  imports: [
      ...
     MatDialogModule,
  ],
````

In the dailog typescript file, the constructor is passed a reference to the dialog being opened, and data that caller wishes to pass to customise the dialog (e.g. specify a message to display)

````typescript
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData) {
      this.message = data.message;
    }
````

To close the dialog (upon user click of close) the following call is made:

````typescript
this.dialogRef.close();
````

In the case of a dialog being closed due to "OK" or "Submit" being clicked, some kind of result value can be passed to `close()`.

Important: in the `app.module.ts` the dialog component type must be added to `entryComponents`.


## Open dialog

To open the diallog we call `open` on `MatDialog` (which is injected into the caller component).  This can all be seen in `app.component.ts`.  It takes the type of component to open (`ModalDialogComponent`), together with options and data.

To respond to the dialog being closed, we can subscribe the the `afterClosed()` event.

````
dialogRef.afterClosed().subscribe(result => {
  /* handle close */
});
````



