import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = "";

  constructor(public dialog: MatDialog) { }

  onClick() {

    const dialogRef = this.dialog.open(ModalDialogComponent, {
      disableClose: true,
      width: '500px',
      data: { message: "hello " + this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog closed');
      if (result) {
        console.log("have result: " + result);
      }
    });

  }
}
