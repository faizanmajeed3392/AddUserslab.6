import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() users: string[] = [];

// Output property to emit an event when a user is removed
  @Output() removeUser: EventEmitter<string> = new EventEmitter<string>();

// Method to emit the removeUser event
  onRemove(user: string) {
    this.removeUser.emit(user);  // Emit the user's name when "Remove" button is clicked
  }
}
