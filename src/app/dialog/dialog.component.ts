import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  type = 'Alert';
  message = '';
  onSuccessCb = () => {};
  @ViewChild('container') container;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  openDialog(type: string, message: string, onSuccessCb: () => void) {
    this.type = type;
    this.message = message;
    this.onSuccessCb = onSuccessCb;
    this.renderer.setStyle(this.container.nativeElement, 'display', 'flex');
  }

  closeDialog() {
    this.renderer.setStyle(this.container.nativeElement, 'display', 'none');
  }

  onSuccess() {
    this.onSuccessCb();
    this.closeDialog();
  }

  onCancel() {
    this.closeDialog();
  }
}
