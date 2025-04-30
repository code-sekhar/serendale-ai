import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// interface Sector {
//   name: string;
//   checked: boolean;
//   expanded?: boolean;
//   children?: Sector[];
//   combained:any;
// }
@Component({
  selector: 'app-sectors-industries',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './sectors-industries.component.html',
  styleUrl: './sectors-industries.component.scss'
})
export class SectorsIndustriesComponent {
  fixedSectors = ['Utilities', 'Energy', 'Materials'];
  // sectors: any = [
  //   {
  //     name: 'Health Care',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Health Care Equipment and Services',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           { name: 'Health Care Equipment and Supplies', checked: false },
  //           { name: 'Health Care Providers and Services', checked: false },
  //           { name: 'Health Care Technology', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Pharmaceuticals, Biotechnology and Life Sciences',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           { name: 'Biotechnology', checked: false },
  //           { name: 'Pharmaceuticals', checked: false },
  //           { name: 'Life Sciences Tools and Services', checked: false }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Information Technology',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Software and Services',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           { name: 'IT Services', checked: false },
  //           { name: 'Software', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Technology Hardware and Equipment',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           { name: 'Communications Equipment', checked: false },
  //           { name: 'Technology Hardware, Storage and Peripherals', checked: false },
  //           { name: 'Electronic Equipment, Instruments and Components', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Semiconductors and Semiconductor Equipment',
  //         checked: false
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Financials',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Banks',
  //         checked: false,
  //         children: [{ name: 'Banks', checked: false }]
  //       },
  //       {
  //         name: 'Financial Services',
  //         checked: false,
  //         children: [
  //           { name: 'Consumer Finance', checked: false },
  //           { name: 'Capital Markets', checked: false },
  //           { name: 'Mortgage Real Estate Investment Trusts (REITs)', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Insurance',
  //         checked: false
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Consumer Discretionary',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Automobiles and Components',
  //         checked: false,
  //         children: [
  //           { name: 'Automobile Components', checked: false },
  //           { name: 'Automobiles', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Consumer Durables and Apparel',
  //         checked: false,
  //         children: [
  //           { name: 'Household Durables', checked: false },
  //           { name: 'Leisure Products', checked: false },
  //           { name: 'Textiles, Apparel and Luxury Goods', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Consumer Services',
  //         checked: false,
  //         children: [
  //           { name: 'Hotels, Restaurants and Leisure', checked: false },
  //           { name: 'Diversified Consumer Services', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Consumer Discretionary Distribution and Retail',
  //         checked: false,
  //         children: [
  //           { name: 'Broadline Retail', checked: false },
  //           { name: 'Specialty Retail', checked: false }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Industrials',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Capital Goods',
  //         checked: false,
  //         children: [
  //           { name: 'Aerospace and Defense', checked: false },
  //           { name: 'Building Products', checked: false },
  //           { name: 'Construction and Engineering', checked: false },
  //           { name: 'Electrical Equipment', checked: false },
  //           { name: 'Industrial Conglomerates', checked: false },
  //           { name: 'Machinery', checked: false },
  //           { name: 'Trading Companies and Distributors', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Commercial and Professional Services',
  //         checked: false,
  //         children: [
  //           { name: 'Commercial Services and Supplies', checked: false },
  //           { name: 'Professional Services', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Transportation',
  //         checked: false,
  //         children: [
  //           { name: 'Air Freight and Logistics', checked: false },
  //           { name: 'Passenger Airlines', checked: false },
  //           { name: 'Marine Transportation', checked: false },
  //           { name: 'Ground Transportation', checked: false },
  //           { name: 'Transportation Infrastructure', checked: false }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     combained:[
  //       {
  //         name: 'Utilities',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           {
  //             name: 'Utilities',
  //             checked: false,
  //             children: [
  //               { name: 'Electric Utilities', checked: false },
  //               { name: 'Gas Utilities', checked: false },
  //               { name: 'Multi-Utilities', checked: false },
  //               { name: 'Water Utilities', checked: false },
  //               { name: 'Independent Power and Renewable Electricity Producers', checked: false }
  //             ]
  //           }
  //         ]
  //       },
       
  //       {
  //         name: 'Energy',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           {
  //             name: 'Energy Equipment and Services',
  //             checked: false
  //           },
  //           {
  //             name: 'Oil, Gas and Consumable Fuels',
  //             checked: false
  //           }
  //         ]
  //       },
  //       {
  //         name: 'Materials',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           {
  //             name: 'Chemicals',
  //             checked: false
  //           },
  //           {
  //             name: 'Construction Materials',
  //             checked: false
  //           },
  //           {
  //             name: 'Containers and Packaging',
  //             checked: false
  //           },
  //           {
  //             name: 'Metals and Mining',
  //             checked: false
  //           },
  //           {
  //             name: 'Paper and Forest Products',
  //             checked: false
  //           }
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     name: 'Consumer Staples',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Consumer Staples Distribution and Retail',
  //         checked: false,
          
  //         children: [{ name: 'Consumer Staples Distribution and Retail', checked: false, expanded: true, }]
  //       },
  //       {
  //         name: 'Food, Beverage and Tobacco',
  //         checked: false,
  //         children: [
  //           { name: 'Beverages', checked: false },
  //           { name: 'Food Products', checked: false },
  //           { name: 'Tobacco', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Household and Personal Products',
  //         checked: false,
  //         children: [
  //           { name: 'Household Products', checked: false },
  //           { name: 'Personal Care Products', checked: false }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Real Estate',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Equity Real Estate Investment Trusts (REITs)',
  //         checked: false,
  //         expanded: true,
  //         children: [
  //           { name: 'Diversified REITs', checked: false },
  //           { name: 'Health Care REITs', checked: false },
  //           { name: 'Hotel and Resort REITs', checked: false },
  //           { name: 'Industrial REITs', checked: false },
  //           { name: 'Office REITs', checked: false },
  //           { name: 'Residential REITs', checked: false },
  //           { name: 'Retail REITs', checked: false },
  //           { name: 'Specialized REITs', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Real Estate Management and Development',
  //         checked: false,
  //         children: [
  //           { name: 'Real Estate Management and Development', checked: false }
  //         ]
  //       }
  //     ]
  //   },
    
  //   {
  //     name: 'Communication Services',
  //     checked: false,
  //     expanded: true,
  //     children: [
  //       {
  //         name: 'Telecommunication Services',
  //         checked: false,
  //         children: [
  //           { name: 'Diversified Telecommunication Services', checked: false },
  //           { name: 'Wireless Telecommunication Services', checked: false }
  //         ]
  //       },
  //       {
  //         name: 'Media and Entertainment',
  //         checked: false,
  //         children: [
  //           { name: 'Media', checked: false },
  //           { name: 'Entertainment', checked: false },
  //           { name: 'Interactive Media and Services', checked: false }
  //         ]
  //       }
  //     ]
  //   },
   
    
    
  // ];
  sectors: any = [
    {
      name: 'Health Care',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Health Care Equipment and Services',
          checked: false,
          expanded: true,
          children: [
            { name: 'Health Care Equipment and Supplies', checked: false },
            { name: 'Health Care Providers and Services', checked: false },
            { name: 'Health Care Technology', checked: false }
          ]
        },
        {
          name: 'Pharmaceuticals, Biotechnology and Life Sciences',
          checked: false,
          expanded: true,
          children: [
            { name: 'Biotechnology', checked: false },
            { name: 'Pharmaceuticals', checked: false },
            { name: 'Life Sciences Tools and Services', checked: false }
          ]
        }
      ]
    },
   
   
    {
      name: 'Consumer Discretionary',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Automobiles and Components',
          checked: false,
          children: [
            { name: 'Automobile Components', checked: false },
            { name: 'Automobiles', checked: false }
          ]
        },
        {
          name: 'Consumer Durables and Apparel',
          checked: false,
          children: [
            { name: 'Household Durables', checked: false },
            { name: 'Leisure Products', checked: false },
            { name: 'Textiles, Apparel and Luxury Goods', checked: false }
          ]
        },
        {
          name: 'Consumer Services',
          checked: false,
          children: [
            { name: 'Hotels, Restaurants and Leisure', checked: false },
            { name: 'Diversified Consumer Services', checked: false }
          ]
        },
        {
          name: 'Consumer Discretionary Distribution and Retail',
          checked: false,
          children: [
            { name: 'Broadline Retail', checked: false },
            { name: 'Specialty Retail', checked: false }
          ]
        }
      ]
    },
    {
      name: 'Consumer Staples',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Consumer Staples Distribution and Retail',
          checked: false,
          
          children: [{ name: 'Consumer Staples Distribution and Retail', checked: false, expanded: true, }]
        },
        {
          name: 'Food, Beverage and Tobacco',
          checked: false,
          children: [
            { name: 'Beverages', checked: false },
            { name: 'Food Products', checked: false },
            { name: 'Tobacco', checked: false }
          ]
        },
        {
          name: 'Household and Personal Products',
          checked: false,
          children: [
            { name: 'Household Products', checked: false },
            { name: 'Personal Care Products', checked: false }
          ]
        }
      ]
    },
    {
      name: 'Information Technology',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Software and Services',
          checked: false,
          expanded: true,
          children: [
            { name: 'IT Services', checked: false },
            { name: 'Software', checked: false }
          ]
        },
        {
          name: 'Technology Hardware and Equipment',
          checked: false,
          expanded: true,
          children: [
            { name: 'Communications Equipment', checked: false },
            { name: 'Technology Hardware, Storage and Peripherals', checked: false },
            { name: 'Electronic Equipment, Instruments and Components', checked: false }
          ]
        },
        {
          name: 'Semiconductors and Semiconductor Equipment',
          checked: false
        }
      ]
    },
    {
      name: 'Industrials',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Capital Goods',
          checked: false,
          children: [
            { name: 'Aerospace and Defense', checked: false },
            { name: 'Building Products', checked: false },
            { name: 'Construction and Engineering', checked: false },
            { name: 'Electrical Equipment', checked: false },
            { name: 'Industrial Conglomerates', checked: false },
            { name: 'Machinery', checked: false },
            { name: 'Trading Companies and Distributors', checked: false }
          ]
        },
        {
          name: 'Commercial and Professional Services',
          checked: false,
          children: [
            { name: 'Commercial Services and Supplies', checked: false },
            { name: 'Professional Services', checked: false }
          ]
        },
        {
          name: 'Transportation',
          checked: false,
          children: [
            { name: 'Air Freight and Logistics', checked: false },
            { name: 'Passenger Airlines', checked: false },
            { name: 'Marine Transportation', checked: false },
            { name: 'Ground Transportation', checked: false },
            { name: 'Transportation Infrastructure', checked: false }
          ]
        }
      ]
    },
    {
      name: 'Real Estate',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Equity Real Estate Investment Trusts (REITs)',
          checked: false,
          expanded: true,
          children: [
            { name: 'Diversified REITs', checked: false },
            { name: 'Health Care REITs', checked: false },
            { name: 'Hotel and Resort REITs', checked: false },
            { name: 'Industrial REITs', checked: false },
            { name: 'Office REITs', checked: false },
            { name: 'Residential REITs', checked: false },
            { name: 'Retail REITs', checked: false },
            { name: 'Specialized REITs', checked: false }
          ]
        },
        {
          name: 'Real Estate Management and Development',
          checked: false,
          children: [
            { name: 'Real Estate Management and Development', checked: false }
          ]
        }
      ]
    },
    {
      name: 'Financials',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Banks',
          checked: false,
          children: [{ name: 'Banks', checked: false }]
        },
        {
          name: 'Financial Services',
          checked: false,
          children: [
            { name: 'Consumer Finance', checked: false },
            { name: 'Capital Markets', checked: false },
            { name: 'Mortgage Real Estate Investment Trusts (REITs)', checked: false }
          ]
        },
        {
          name: 'Insurance',
          checked: false
        }
      ]
    },
    {
      combained:[
        {
          name: 'Utilities',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'Utilities',
              checked: false,
              children: [
                { name: 'Electric Utilities', checked: false },
                { name: 'Gas Utilities', checked: false },
                { name: 'Multi-Utilities', checked: false },
                { name: 'Water Utilities', checked: false },
                { name: 'Independent Power and Renewable Electricity Producers', checked: false }
              ]
            }
          ]
        },
       
        {
          name: 'Energy',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'Energy Equipment and Services',
              checked: false
            },
            {
              name: 'Oil, Gas and Consumable Fuels',
              checked: false
            }
          ]
        },
        {
          name: 'Materials',
          checked: false,
          expanded: true,
          children: [
            {
              name: 'Chemicals',
              checked: false
            },
            {
              name: 'Construction Materials',
              checked: false
            },
            {
              name: 'Containers and Packaging',
              checked: false
            },
            {
              name: 'Metals and Mining',
              checked: false
            },
            {
              name: 'Paper and Forest Products',
              checked: false
            }
          ]
        },
      ]
    },
    
    {
      name: 'Communication Services',
      checked: false,
      expanded: true,
      children: [
        {
          name: 'Telecommunication Services',
          checked: false,
          children: [
            { name: 'Diversified Telecommunication Services', checked: false },
            { name: 'Wireless Telecommunication Services', checked: false }
          ]
        },
        {
          name: 'Media and Entertainment',
          checked: false,
          children: [
            { name: 'Media', checked: false },
            { name: 'Entertainment', checked: false },
            { name: 'Interactive Media and Services', checked: false }
          ]
        }
      ]
    },
   
    
    
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
