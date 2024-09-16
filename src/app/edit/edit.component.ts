import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Employee } from "../home/home.component";
import { InputValidator } from "../validator/input.validator";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  @Input("employee") employee: Employee;

  @Output() closeModal = new EventEmitter();
  @Output() editEmployee = new EventEmitter();
  @Output() deleteEmployee = new EventEmitter();

  formGroup: FormGroup;

  constructor() {}

  handleClose() {
    this.closeModal.emit();
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(this.employee.name, InputValidator.required),
      role: new FormControl(this.employee.role, InputValidator.required),
      skills: new FormArray(
        this.employee.skills.map(
          skill =>
            new FormControl(skill, [
              InputValidator.required,
              InputValidator.noSpace
            ])
        )
      )
    });
  }

  handleDeleteSkill(i: number) {
    const temp = (<FormArray>this.formGroup.get("skills")).controls;
    if (temp.length > 1) {
      temp.splice(i, 1);
    }
  }

  handleSubmit() {
    this.editEmployee.emit({ id: this.employee.id, ...this.formGroup.value });
  }

  handleAddSkill() {
    const skillsArray = <FormArray>this.formGroup.get("skills");

    if (skillsArray.value[skillsArray.value.length - 1]) {
      (<FormArray>this.formGroup.get("skills")).push(new FormControl(null));
    }
  }

  handleDeleteEmployee() {
    this.deleteEmployee.emit(this.employee.id - 1);
  }
}
