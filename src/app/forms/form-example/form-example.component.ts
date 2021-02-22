import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { FromExampleService } from '../../services/from-example.service';


@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {

  form!: any;
  constructor( private formBuilder: FormBuilder, public fromExampleService: FromExampleService) {
    this.buildForm();
  }
  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });    
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      let value = this.form.value;
      this.fromExampleService.addDtaFrom({
        name: value.name,
        description: value.description
      });
      console.log(this.fromExampleService);
    } else {
      this.form.markAllAsTouched();
    }
  }
  
}
