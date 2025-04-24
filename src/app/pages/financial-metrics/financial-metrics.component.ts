import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-financial-metrics',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './financial-metrics.component.html',
  styleUrl: './financial-metrics.component.scss'
})
export class FinancialMetricsComponent {

}
