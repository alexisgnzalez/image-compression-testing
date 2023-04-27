import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'image-compression-testing';
  pdfUrl: any;
  imgUrl: any;

  constructor(
    private imageCompress: NgxImageCompressService,
    private sanitizer: DomSanitizer
  ) {}

  async onFileSelected(event: any) {
    let base64pdf = await this.fileToDataURL(event.target.files[0]);
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(base64pdf);
  }

  async onImageSelected(event: any) {
    let base64img = await this.fileToDataURL(event.target.files[0]);
    console.log(base64img);
  }

  fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
