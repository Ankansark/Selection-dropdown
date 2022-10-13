import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multiple-select-dropdown',
  templateUrl: './multiple-select-dropdown.component.html',
  styleUrls: ['./multiple-select-dropdown.component.css']
})
export class MultipleSelectDropdownComponent implements OnInit {

  constructor() { }

  dropdownMenu = true
  dropdownList: any;
  selectedItems: any;
  dropdownSettings: IDropdownSettings

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Kolkata' },
      { item_id: 3, item_text: 'Delhi' },
      { item_id: 4, item_text: 'Kashmir' },
      { item_id: 5, item_text: 'Surat' }
    ];

    this.dropdownSettings = {
      // singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      // selectAllText: 'Select All',
      // unSelectAllText: 'UnSelect All',
      allowSearchFilter: false
    };

  }

  onItemSelect(item: any) {
    console.log("Single Item selected",item);
  }
  onSelectAll(items: any) {
    console.log("All Item selected",items);
  }




}
