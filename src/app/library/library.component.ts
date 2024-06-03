import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibraryService } from '../library/library.service';
import { Library } from './library.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  //rodbelek les imports fel component kounech fil angular18 ill fih standalones !!! 
  //imports: [CommonModule, FormsModule, ReactiveFormsModule],
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit{

  library: Library = { libraryName: '', libraryAddress: '', shelves: [] };
  developperForm: FormGroup;
  

  constructor(private fb: FormBuilder, private router: Router, private libraryService: LibraryService) {
    this.developperForm = this.fb.group({
      //library: new FormControl(''),
      libraryName: new FormControl(''),
      libraryAddress: new FormControl(''),
      shelves: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  
  shelves(): FormArray {
    return this.developperForm.get('shelves') as FormArray;
  }

  
  books(shelfIndex: number): FormArray {
    return this.shelves().at(shelfIndex).get('books') as FormArray;
  }

  
  addShelf() {
    const shelf = this.fb.group({
      //shelf: new FormControl(''),
      // shelfNumber: new FormControl(''),
      books: this.fb.array([])
    });
    this.shelves().push(shelf);
  }

  
  removeShelf(index: number) {
    this.shelves().removeAt(index);
  }

  
  addBook(shelfIndex: number) {
    const book = this.fb.group({
      //book: new FormControl(''),
      name: new FormControl(''),
      authorName: new FormControl('')
    });
    this.books(shelfIndex).push(book);
  }

  removeBook(shelfIndex: number, bookIndex: number) {
    this.books(shelfIndex).removeAt(bookIndex);
  }

  

  onSubmit(): void {
    this.libraryService.addLibrary(this.developperForm.value).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
