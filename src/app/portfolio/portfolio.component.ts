import { Component ,HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PORTFOLIOComponent {
  imgSrc =''
  isImageVisible: boolean = false;

constructor(){}

getImage(event: any): void {
  const picContainer = event.target.closest('.pic');
  // console.log(picContainer);

  if (picContainer) {

    const imgElement = picContainer.querySelector('img');
    // console.log(imgElement.src);
    if (imgElement) {
      this.imgSrc = imgElement.src;
      this.isImageVisible = true;

    }
  }

}
@HostListener('document:click', ['$event'])
onDocumentClick(event: MouseEvent): void {
  const clickedInside = (event.target as HTMLElement).closest('.openImages, .layer');
  if (!clickedInside) {
    this.isImageVisible = false;
  }
}
toggleImageVisibility(): void {
  this.isImageVisible = !this.isImageVisible;
}

}
