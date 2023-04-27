import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'image-compression-testing';
  image: any = undefined;
  constructor(private imageCompress: NgxImageCompressService) {}
  async onFileSelected(event: any) {
    console.log(event.target.files[0]);
    this.image = await this.fileToDataURL(event.target.files[0]);
    console.log(this.image);
    // this.imageCompress.compressFile()
  }
  fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
