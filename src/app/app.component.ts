import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-multiselect-dropdown';


  allList = [
    ["WB", ["KOL", "DGP", "BNK", "PUR"]],
    ["MH", ["MUM", "PUN", "NSK", "NAG"]]
  ]

  stateList = new Array()
  cityList = new Array()


  selectedState: any


  // dropdownMenu = true
  // selectedItems: any;
  dropdownSettings: IDropdownSettings


  ngOnInit() {
    this.checkstate()


   

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_text',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
    };
  }

  checkstate() {
    for (let state of this.allList) {
      this.stateList.push(state[0])
      console.log("Statenameis", state[0])
    }
  }

  checkcity() {
    this.cityList = []; // .splice(0,this.cityList.length)
    for (let all of this.allList) {
      console.log("all 0 is ", all[0])
      if (all[0] == this.selectedState) {
        console.log("All[0] mached", all[0])
        var city_id=1
        for (let city of all[1]) {
          this.cityList.push({ item_text: city })
          city_id=city_id+0
          console.log("City name is", city)
        }
        console.log("full city array is ", this.cityList)
      }
    }
  }

  city(value:any){
    console.log("The selected city is", value)

  }
}