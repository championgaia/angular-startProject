import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'VHN';
  myTable = ['A', 'B', 'C', 'D']
  onChange(event){
    let elements = document.getElementById('cbNumeroClient').getElementsByTagName('option');
    if (elements.length != 0){
      for(let item of elements){
        item.remove();
      }
    }
    for (const iterator of this.myTable) {
    document.getElementById('cbNumeroClient').innerHTML +='<option> '+iterator+'</option>';
    document.getElementById('mixClient').innerHTML +='<option> '+event.target.value+iterator+'</option>';
    }
  }
}
