import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-pdf-stuff',
  templateUrl: './pdf-stuff.component.html',
  styleUrls: ['./pdf-stuff.component.scss'],
})
export class PdfStuffComponent {
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

  fileToDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }
}
