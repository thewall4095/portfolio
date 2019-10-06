import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from './../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService) { }

  submit() {
    let payload = {
      name : this.name.value,
      email: this.email.value,
      message: this.message.value
    }
    console.log("form"+JSON.stringify(payload));
    this.dataService.sendQueryMail(payload).subscribe( _res => {
      console.log(JSON.stringify(_res));
    });
  }
  ngOnInit() {
  }

}
