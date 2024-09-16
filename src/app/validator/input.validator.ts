import { FormControl } from "@angular/forms";

export class InputValidator {
  static required(control: FormControl) {
    if (control.value === null || control.value === "") {
      return { required: true };
    }

    return null;
  }

  static noSpace(control: FormControl) {
    if (control.value && control.value.indexOf(" ") !== -1) {
      console.log("err");
      return { noSpace: true };
    }
    return null;
  }
}
