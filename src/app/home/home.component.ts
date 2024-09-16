import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

export type Skills = string[];

export type Employee = {
  id: number;
  name: string;
  role: string;
  skills: Skills;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  userArray: Employee[] = [
    {
      id: 1,
      name: "Michael Scott",
      role: "Regional manager",
      skills: ["JS", "C++"]
    },
    {
      id: 2,
      name: "Jim Halpert",
      role: "Sales representative",
      skills: ["JS"]
    },
    {
      id: 3,
      name: "Dwight Schrute",
      role: "Assistant to the regional manager",
      skills: ["python"]
    },
    {
      id: 4,
      name: "Pam Beesly",
      role: "receptionist",
      skills: ["Java"]
    },
    {
      id: 5,
      name: "Andy Bernard",
      role: "Regional Directo",
      skills: ["C++", "JS", "Java"]
    },
    {
      id: 6,
      name: "Ryan Howard",
      role: "Intern",
      skills: ["JS"]
    }
  ];
  isAddOpen = false;
  isEditOpen = false;

  currentIndex = 0;

  constructor() {}

  handleModal(type: string) {
    switch (type) {
      case "add":
        this.isAddOpen = !this.isAddOpen;
        break;

      case "edit":
        this.isEditOpen = !this.isEditOpen;
    }
  }

  handleEdit(employee: Employee) {
    this.userArray[employee.id - 1] = employee;
    this.isEditOpen = false;
  }

  handleAdd(employee: { name: string; role: string; skills: Skills }) {
    this.userArray.push({ id: this.userArray.length + 1, ...employee });
    this.isAddOpen = false;
  }

  handleOnClick(i: number) {
    this.handleModal("edit");
    this.currentIndex = i;
  }

  handleDeleteEmployee(i: number) {
    this.userArray.splice(i, 1);
    this.isEditOpen = false;
  }

  ngOnInit(): void {}
}
