import { Component } from '@angular/core';
import {ChildComponent} from '../child/child.component';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent,
    FormsModule,
    NgForOf
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  users: string[] = [];

  // Method to add a new user
  addUser(newUser: string) {
    if (newUser && !this.users.includes(newUser.trim())) {
      this.users.push(newUser.trim());  // Add user to the list if the name is valid and unique
    }
  }

  // Method to handle user removal
  removeUser(user: string) {
    this.users = this.users.filter(u => u !== user);  // Filter out the removed user
  }
}
