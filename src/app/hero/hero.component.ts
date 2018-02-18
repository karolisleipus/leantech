import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
        panelClass: 'custom-dialog',
    });
  };

  ngOnInit() {
  }

}
