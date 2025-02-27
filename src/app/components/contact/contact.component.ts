import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _ToastrService= inject(ToastrService)

  contact:FormGroup= this._FormBuilder.group({
    fName:[ '' ,Validators.required],
    lName:['' , Validators.required],
    email:['',[Validators.required, Validators.email]],
    message:['' ,Validators.required]
  })

  submitForm(){
    if (this.contact.valid) {
    const formData = this.contact.value
    const templateParams = {
      from_name: `${formData.fName} ${formData.lName}`,
      from_email: formData.email,
      message: formData.message
    }
    emailjs.send('service_atbxgem', 'template_qbz6n6e', templateParams, 'XV9kYYkkbdSxeHlSu')
    .then(response => {
      this._ToastrService.success('Your message has been sent successfully.' )
      this.contact.reset();
    })
    .catch(error => {
      this._ToastrService.error('Failed to send message. Please try again.')
    });
} else {
  alert('Please fill all required fields.');
}
    }  
    
  }

