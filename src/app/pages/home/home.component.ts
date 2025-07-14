import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';

  constructor(private router: Router) { }

  searchRecipes() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/recipes'], { queryParams: { q: this.searchTerm } });
    }
  }
}