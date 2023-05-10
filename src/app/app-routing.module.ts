import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageStuffComponent } from './components/image-stuff/image-stuff.component';
import { PdfStuffComponent } from './components/pdf-stuff/pdf-stuff.component';

const routes: Routes = [
  { path: 'image-stuff', component: ImageStuffComponent },
  { path: 'pdf-stuff', component: PdfStuffComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
