import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { InquiryDialogComponent } from './inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  post = {};

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

    save(post){
      this.postService.create(post);
      this.dialogRef.close();
      let dialogRef = this.dialog.open(InquiryDialogComponent, {
        panelClass: 'custom-dialog',
      });
    }

    ngOnInit() {
  }
}
