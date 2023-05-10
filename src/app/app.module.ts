import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageStuffComponent } from './components/image-stuff/image-stuff.component';
import { PdfStuffComponent } from './components/pdf-stuff/pdf-stuff.component';
import { UserFriendlyBytesPipe } from './pipes/user-friendly-bytes.pipe';

@NgModule({
  declarations: [AppComponent, ImageStuffComponent, PdfStuffComponent, UserFriendlyBytesPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
