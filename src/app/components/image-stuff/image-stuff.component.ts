import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-image-stuff',
  templateUrl: './image-stuff.component.html',
  styleUrls: ['./image-stuff.component.scss'],
})
export class ImageStuffComponent {
  imgUrl: string = '';
  compressedImgUrl: string = '';
  originalBytes: number = 0;
  compressedBytes: number = 0;

  constructor(
    private imageCompress: NgxImageCompressService,
    private sanitizer: DomSanitizer
  ) {}

  async onImageSelected(event: any) {
    this.imgUrl = await this.fileToDataURL(event.target.files[0]);
    this.originalBytes = this.imageCompress.byteCount(this.imgUrl);
    const orientation = this.imageCompress.DOC_ORIENTATION.Default;
    if (this.originalBytes > 500000) {
      this.compressedImgUrl = await this.imageCompress.compressFile(
        this.imgUrl,
        orientation,
        70,
        70
      );
      this.compressedBytes = this.imageCompress.byteCount(
        this.compressedImgUrl
      );
      console.log(this.originalBytes, this.compressedBytes);
    }
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
