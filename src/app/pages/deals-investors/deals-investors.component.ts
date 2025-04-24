import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-deals-investors',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './deals-investors.component.html',
  styleUrl: './deals-investors.component.scss'
})
export class DealsInvestorsComponent {

}
