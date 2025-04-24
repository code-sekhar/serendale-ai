import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locations',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent {
  sectors: any = [
    {
      name: 'United States and Canada',
      checked: false,
      expanded: true,
      children: [
     
        {
          name: 'United States of America',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'West',
              checked: false,
              expanded: true,
              children: [
                { name: 'Alaska', checked: false },
                { name: 'California', checked: false },
                { name: 'Hawaii', checked: false },
                { name: 'Oregon', checked: false },
                { name: 'Washington', checked: false }
              ]
            },
            {
              name: 'Midwest',
              checked: false,
              expanded: true,
              children: [
                { name: 'Illinois', checked: false },
                { name: 'Indiana', checked: false },
                { name: 'Iowa', checked: false },
                { name: 'Kansas', checked: false },
                { name: 'Michigan', checked: false },
                { name: 'Minnesota', checked: false },
                { name: 'Missouri', checked: false },
                { name: 'Nebraska', checked: false },
                { name: 'North Dakota', checked: false },
                { name: 'Ohio', checked: false },
                { name: 'South Dakota', checked: false },
                { name: 'Wisconsin', checked: false }
              ]
            },
            {
              name: 'South',
              checked: false,
              expanded: true,
              children: [
                { name: 'Alabama', checked: false },
                { name: 'Arkansas', checked: false },
                { name: 'Delaware', checked: false },
                { name: 'Florida', checked: false },
                { name: 'Georgia', checked: false },
                { name: 'Kentucky', checked: false },
                { name: 'Louisiana', checked: false },
                { name: 'Maryland', checked: false },
                { name: 'Mississippi', checked: false },
                { name: 'North Carolina', checked: false },
                { name: 'Oklahoma', checked: false },
                { name: 'South Carolina', checked: false },
                { name: 'Tennessee', checked: false },
                { name: 'Texas', checked: false },
                { name: 'Virginia', checked: false },
                { name: 'West Virginia', checked: false },
                { name: 'Washington, D.C.', checked: false }
              ]
            },
            {
              name: 'Northeast',
              checked: false,
              expanded: true,
              children: [
                { name: 'Connecticut', checked: false },
                { name: 'Maine', checked: false },
                { name: 'Massachusetts', checked: false },
                { name: 'New Hampshire', checked: false },
                { name: 'New Jersey', checked: false },
                { name: 'New York', checked: false },
                { name: 'Pennsylvania', checked: false },
                { name: 'Rhode Island', checked: false },
                { name: 'Vermont', checked: false }
              ]
            }
          ]
        },
        {
          name: 'US Territories and Possessions',
          checked: false,
          expanded: true,
          children: [
            { name: 'American Samoa', checked: false },
            { name: 'Guam', checked: false },
            { name: 'Midway Islands', checked: false },
            { name: 'Northern Mariana Islands', checked: false },
            { name: 'Palau', checked: false },
            { name: 'Puerto Rico', checked: false },
            { name: 'Virgin Islands', checked: false }
          ]
        },
        {
          name: 'Canada',
          checked: false,
          expanded: true,
          children: [
            { name: 'Alberta', checked: false },
            { name: 'British Columbia', checked: false },
            { name: 'Manitoba', checked: false },
            { name: 'New Brunswick', checked: false },
            { name: 'Newfoundland and Labrador', checked: false },
            { name: 'Northwest Territories', checked: false },
            { name: 'Nova Scotia', checked: false },
            { name: 'Nunavut', checked: false },
            { name: 'Ontario', checked: false },
            { name: 'Prince Edward Island', checked: false },
            { name: 'Quebec', checked: false },
            { name: 'Saskatchewan', checked: false },
            { name: 'Yukon Territory', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Latin America and Caribbean',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Caribbean',
          checked: false,
          expanded: true,
          children: [
            { name: 'Anguilla', checked: false },
            { name: 'Antigua and Barbuda', checked: false },
            { name: 'Aruba', checked: false },
            { name: 'Bahamas, The', checked: false },
            { name: 'Barbados', checked: false },
            { name: 'Bermuda', checked: false },
            { name: 'British Virgin Islands', checked: false },
            { name: 'Cayman Islands', checked: false },
            { name: 'Cuba', checked: false },
            { name: 'Dominica', checked: false },
            { name: 'Dominican Republic', checked: false },
            { name: 'Grenada', checked: false },
            { name: 'Guadeloupe', checked: false },
            { name: 'Haiti', checked: false },
            { name: 'Jamaica', checked: false },
            { name: 'Martinique', checked: false },
            { name: 'Montserrat', checked: false },
            { name: 'Puerto Rico', checked: false },
            { name: 'Saint Barthelemy', checked: false },
            { name: 'Saint Kitts and Nevis', checked: false },
            { name: 'Saint Lucia', checked: false },
            { name: 'Saint Martin', checked: false },
            { name: 'Saint Vincent & The Grenadines', checked: false },
            { name: 'Sint Maarten', checked: false },
            { name: 'Trinidad and Tobago', checked: false },
            { name: 'Turks and Caicos Islands', checked: false },
            { name: 'U.S. Virgin Islands', checked: false }
          ]
        },
        {
          name: 'Central America & Mexico',
          checked: false,
          expanded: true,
          children: [
            { name: 'Belize', checked: false },
            { name: 'Costa Rica', checked: false },
            { name: 'El Salvador', checked: false },
            { name: 'Guatemala', checked: false },
            { name: 'Honduras', checked: false },
            { name: 'Mexico', checked: false },
            { name: 'Nicaragua', checked: false },
            { name: 'Panama', checked: false }
          ]
        },
        {
          name: 'South America',
          checked: false,
          expanded: true,
          children: [
            { name: 'Argentina', checked: false },
            { name: 'Bolivia', checked: false },
            { name: 'Brazil', checked: false },
            { name: 'Chile', checked: false },
            { name: 'Colombia', checked: false },
            { name: 'Ecuador', checked: false },
            { name: 'Falkland Islands', checked: false },
            { name: 'French Guiana', checked: false },
            { name: 'Guyana', checked: false },
            { name: 'Paraguay', checked: false },
            { name: 'Peru', checked: false },
            { name: 'Suriname', checked: false },
            { name: 'Uruguay', checked: false },
            { name: 'Venezuela', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Europe',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Developed Markets',
          checked: false,
          expanded: true,
          children: [
            { name: 'Andorra', checked: false },
            { name: 'Austria', checked: false },
            { name: 'Belgium', checked: false },
            { name: 'Channel Islands', checked: false },
            { name: 'Denmark', checked: false },
            { name: 'Finland', checked: false },
            { name: 'France', checked: false },
            { name: 'Germany', checked: false },
            { name: 'Gibraltar', checked: false },
            { name: 'Greece', checked: false },
            { name: 'Iceland', checked: false },
            { name: 'Ireland', checked: false },
            { name: 'Isle of Man', checked: false },
            { name: 'Italy', checked: false },
            { name: 'Liechtenstein', checked: false },
            { name: 'Luxembourg', checked: false },
            { name: 'Monaco', checked: false },
            { name: 'Netherlands', checked: false },
            { name: 'Norway', checked: false },
            { name: 'Portugal', checked: false },
            { name: 'San Marino', checked: false },
            { name: 'Spain', checked: false },
            { name: 'Sweden', checked: false },
            { name: 'Switzerland', checked: false },
            { name: 'United Kingdom', checked: false }
          ]
        },
        {
          name: 'Emerging Markets',
          checked: false,
          expanded: true,
          children: [
            { name: 'Albania', checked: false },
            { name: 'Belarus', checked: false },
            { name: 'Bosnia and Herzegovina', checked: false },
            { name: 'Bulgaria', checked: false },
            { name: 'Croatia', checked: false },
            { name: 'Czech Republic', checked: false },
            { name: 'Estonia', checked: false },
            { name: 'Hungary', checked: false },
            { name: 'Kosovo', checked: false },
            { name: 'Latvia', checked: false },
            { name: 'Lithuania', checked: false },
            { name: 'Macedonia', checked: false },
            { name: 'Malta', checked: false },
            { name: 'Moldova', checked: false },
            { name: 'Montenegro', checked: false },
            { name: 'Poland', checked: false },
            { name: 'Romania', checked: false },
            { name: 'Russia', checked: false },
            { name: 'Serbia', checked: false },
            { name: 'Slovakia', checked: false },
            { name: 'Slovenia', checked: false },
            { name: 'Ukraine', checked: false }
          ]
        }
      ]
    },    
    {
      name: 'Asia/Pacific',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Developed Markets',
          checked: false,
          expanded: true,
          children: [
            { name: 'Australia', checked: false },
            { name: 'Hong Kong', checked: false },
            { name: 'Japan', checked: false },
            { name: 'Korea, South', checked: false },
            { name: 'Singapore', checked: false },
            { name: 'Taiwan', checked: false }
          ]
        },
        {
          name: 'Emerging Markets',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'Central Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'Afghanistan', checked: false },
                { name: 'Armenia', checked: false },
                { name: 'Azerbaijan', checked: false },
                { name: 'Georgia', checked: false },
                { name: 'Iran', checked: false },
                { name: 'Kazakhstan', checked: false },
                { name: 'Kyrgyzstan', checked: false },
                { name: 'Mongolia', checked: false },
                { name: 'Tajikistan', checked: false },
                { name: 'Turkmenistan', checked: false },
                { name: 'Uzbekistan', checked: false }
              ]
            },
            {
              name: 'East Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'China', checked: false },
                { name: 'Korea, North', checked: false },
                { name: 'Macau', checked: false },
                { name: 'Mongolia', checked: false }
              ]
            },
            {
              name: 'Indian Sub-Continent',
              checked: false,
              expanded: true,
              children: [
                { name: 'Bangladesh', checked: false },
                { name: 'Bhutan', checked: false },
                { name: 'India', checked: false },
                { name: 'Maldives', checked: false },
                { name: 'Nepal', checked: false },
                { name: 'Pakistan', checked: false },
                { name: 'Sri Lanka', checked: false }
              ]
            },
            {
              name: 'Pacific Islands',
              checked: false,
              expanded: true,
              children: [
                { name: 'Fiji', checked: false },
                { name: 'French Polynesia', checked: false },
                { name: 'Kiribati', checked: false },
                { name: 'Micronesia', checked: false },
                { name: 'New Caledonia', checked: false },
                { name: 'Papua New Guinea', checked: false },
                { name: 'Solomon Islands', checked: false },
                { name: 'Tonga', checked: false },
                { name: 'Tuvalu', checked: false },
                { name: 'Vanuatu', checked: false },
                { name: 'Western Samoa', checked: false }
              ]
            },
            {
              name: 'South East Asia',
              checked: false,
              expanded: true,
              children: [
                { name: 'Brunei', checked: false },
                { name: 'Cambodia', checked: false },
                { name: 'East Timor', checked: false },
                { name: 'Indonesia', checked: false },
                { name: 'Laos', checked: false },
                { name: 'Malaysia', checked: false },
                { name: 'Myanmar', checked: false },
                { name: 'Philippines', checked: false },
                { name: 'Thailand', checked: false },
                { name: 'Vietnam', checked: false }
              ]
            }
          ]
        }
      ]
    },        
    {
      name: 'Africa/Middle East',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Middle East',
          checked: false,
          expanded: true,
          children: [
            { name: 'Bahrain', checked: false },
            { name: 'Cyprus', checked: false },
            { name: 'Iraq', checked: false },
            { name: 'Israel', checked: false },
            { name: 'Jordan', checked: false },
            { name: 'Kuwait', checked: false },
            { name: 'Lebanon', checked: false },
            { name: 'Oman', checked: false },
            { name: 'Palestinian Territories', checked: false },
            { name: 'Qatar', checked: false },
            { name: 'Saudi Arabia', checked: false },
            { name: 'Syria', checked: false },
            { name: 'United Arab Emirates', checked: false },
            { name: 'Yemen', checked: false }
          ]
        },
        {
          name: 'North Africa',
          checked: false,
          expanded: true,
          children: [
            { name: 'Algeria', checked: false },
            { name: 'Egypt', checked: false },
            { name: 'Libya', checked: false },
            { name: 'Morocco', checked: false },
            { name: 'Sudan', checked: false },
            { name: 'Tunisia', checked: false },
            { name: 'Western Sahara', checked: false }
          ]
        },
        {
          name: 'Sub-Saharan Africa',
          checked: false,
          expanded: true,
          children: [
            { name: 'Angola', checked: false },
            { name: 'Benin', checked: false },
            { name: 'Botswana', checked: false },
            { name: 'Burkina Faso', checked: false },
            { name: 'Burundi', checked: false },
            { name: 'Cameroon', checked: false },
            { name: 'Cape Verde', checked: false },
            { name: 'Central African Republic', checked: false },
            { name: 'Chad', checked: false },
            { name: 'Comoros', checked: false },
            { name: 'Congo (Brazzaville)', checked: false },
            { name: 'Congo (Kinshasa)', checked: false },
            { name: 'Côte d\'Ivoire', checked: false },
            { name: 'Djibouti', checked: false },
            { name: 'Equatorial Guinea', checked: false },
            { name: 'Eritrea', checked: false },
            { name: 'Eswatini', checked: false },
            { name: 'Ethiopia', checked: false },
            { name: 'Gabon', checked: false },
            { name: 'Gambia', checked: false },
            { name: 'Ghana', checked: false },
            { name: 'Guinea', checked: false },
            { name: 'Guinea-Bissau', checked: false },
            { name: 'Kenya', checked: false },
            { name: 'Lesotho', checked: false },
            { name: 'Liberia', checked: false },
            { name: 'Madagascar', checked: false },
            { name: 'Malawi', checked: false },
            { name: 'Mali', checked: false },
            { name: 'Mauritania', checked: false },
            { name: 'Mauritius', checked: false },
            { name: 'Mozambique', checked: false },
            { name: 'Namibia', checked: false },
            { name: 'Niger', checked: false },
            { name: 'Nigeria', checked: false },
            { name: 'Rwanda', checked: false },
            { name: 'São Tomé and Príncipe', checked: false },
            { name: 'Senegal', checked: false },
            { name: 'Seychelles', checked: false },
            { name: 'Sierra Leone', checked: false },
            { name: 'Somalia', checked: false },
            { name: 'South Africa', checked: false },
            { name: 'South Sudan', checked: false },
            { name: 'Tanzania', checked: false },
            { name: 'Togo', checked: false },
            { name: 'Uganda', checked: false },
            { name: 'Zambia', checked: false },
            { name: 'Zimbabwe', checked: false }
          ]
        }
      ]
    }
    
   
   
    
    
  ];
  
  
sector: any;
combined: any;
  // toggleExpand(item: any) {
  //   item.expanded = !item.expanded;
  // }

  // toggleCheck(item: any, isParent = false) {
  //   if (item.children) {
  //     item.children.forEach((child: any) => {
  //       child.checked = item.checked;
  //       this.toggleCheck(child);
  //     });
  //   }

  //   if (isParent && item.checked) {
  //     item.expanded = true;
  //   }
  // }
  toggleExpand(item: any): void {
    item.expanded = !item.expanded;
  }

  toggleCheck(item: any, cascade: boolean = false): void {
    if (cascade && item.children) {
      item.children.forEach((child: any) => {
        child.checked = item.checked;
        this.toggleCheck(child, true);
      });
    }
  }

  expandAll(items: any[]): void {
    items.forEach(item => {
      item.expanded = true;
      
      // If the item has children, expand them too
      if (item.children) {
        this.expandAll(item.children);
      }
  
      // If it has `combained`, handle that too
      if (item.combained) {
        this.expandAll(item.combained);
      }
    });
  }
  ngOnInit(): void {
    this.expandAll(this.sectors);
  }
  
}
