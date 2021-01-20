import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bank-assignment';
  @ViewChild(DialogComponent) dialogComponent;
  ngOnInit(): void {}

  removeModal() {
    this.dialogComponent.openDialog(
      'Warning',
      'Are you sure you want to remove the content?',
      () => console.log('success call back simulator')
    );
  }

  confirmModal() {
    this.dialogComponent.openDialog(
      'Confirm',
      'Are you sure you want to add the content?',
      () => console.log('success call back simulator')
    );
  }

  saveModal() {
    this.dialogComponent.openDialog(
      'Save',
      'Are you sure you want to save the content?',
      () => console.log('success call back simulator')
    );
  }
}
