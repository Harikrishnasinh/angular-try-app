import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [NgModule],
  // imports:[FormGroup]
})
export class ContactComponent {
  usersArray: any = []
  checkValue: boolean = false
  signupForm: FormGroup;
  constructor(private frmBuilder: FormBuilder) {
    this.signupForm = frmBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      radio: ['',[Validators.required]],
      checkbox:[''],
      checkbox1:['']
    })
  }

  register(logForm: any) {
    console.log(logForm.controls.username.value)
    if (!this.checkValue) {
      this.usersArray.map((element: any) => {
        if (element.username == logForm.controls.username.value || (element.username == logForm.controls.username.value && element.password == logForm.controls.password.value)) this.checkValue = true
      }
      )
    }
    if (!this.checkValue) {
      this.usersArray.push({
        ['username']: logForm.controls.username.value,
        ['password']: logForm.controls.password.value,
        ['gender']: logForm.controls.radio.value,
        ['checkbox']: logForm.controls.checkbox.value ? "Biker":"",
        ['checkbox1']: logForm.controls.checkbox1.value? "cricket":""
      })
      console.log(this.checkValue + "❌❎✖️")
    }

    console.log(this.usersArray)
    this.checkValue = false
    // if(logForm.controls.username.value == )



  }
  // this is with the template driven form
  // register(form:any){
  //   let username = form.form.controls.username.value
  //   let password = form.form.controls.password.value
  //   this.usersArray = [...this.usersArray,{
  //     ['username']: username,
  //     ['password']: password
  //   }]
  //   // console.log(form.form.controls.username.value)
  //   console.log(this.usersArray)
  // }
  // this is with the reactive forms method


}
