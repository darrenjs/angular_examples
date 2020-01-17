import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/* Data passed to the dialog when requested to open.  Allows the caller
   of the dialog to customise dialog content. */
export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  message: string;

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData) {
      this.message = data.message;
    }

  ngOnInit() {
  }

  onCancelClick(): void {
    /* User dismissed the dialog */
    this.dialogRef.close();
  }

  onSubmitClick(): void {
    /* User clicked 'ok', so return a result to caller */
    const result = true;
    this.dialogRef.close(result);
  }

}
