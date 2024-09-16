import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skills } from '../home/home.component';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputValidator } from '../validator/input.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  formGroup!: FormGroup
  
  @Output() closeModal = new EventEmitter()
  @Output() addEmployee = new EventEmitter()

  handleClose() {
    this.closeModal.emit()
  }


  constructor() { }

  ngOnInit(): void { 
    this.formGroup = new FormGroup(
     {  name: new FormControl(null, InputValidator.required), 
        role: new FormControl(null, InputValidator.required),
        skills: new FormArray([new FormControl(null,[InputValidator.required,InputValidator.noSpace])])
      })
  }
  
  handleAddSkill() {
    const skillsArray = (<FormArray>this.formGroup.get('skills'))
    
    if (skillsArray.value[skillsArray.value.length -1]) {
      (<FormArray>this.formGroup.get('skills')).push(new FormControl(null))
    }

  }

  handleAdd() {
    this.addEmployee.emit(this.formGroup.value)
  }



}
