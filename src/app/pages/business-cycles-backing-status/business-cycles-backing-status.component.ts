import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-business-cycles-backing-status',
  imports: [RouterLink,CommonModule, FormsModule],
  templateUrl: './business-cycles-backing-status.component.html',
  styleUrl: './business-cycles-backing-status.component.scss'
})
export class BusinessCyclesBackingStatusComponent {
  
}
