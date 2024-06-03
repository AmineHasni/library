import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library/library.service';
import { Library } from '../library/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent {

  libraries: Library[] = [];

  constructor(private libraryService: LibraryService, private router: Router) { }

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries(): void {
    this.libraryService.getLibraries().subscribe(libraries => this.libraries = libraries);
  }

  updateLibrary(library: Library): void {
    // Implement the update functionality
    // You can navigate to a form or open a modal with the library details for editing
  }

  deleteLibrary(library: Library): void {
    this.libraryService.deleteLibrary(library.id!).subscribe(() => {
      this.libraries = this.libraries.filter(h => h !== library);
    });
  }

  navigateToAddLibrary(): void {
    this.router.navigate(['/library']);
  }
}
