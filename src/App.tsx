import React, { useState, useEffect } from 'react';
import { Search, Code, Zap, ArrowRight, Menu, X, Sun, Moon } from 'lucide-react';

interface Recipe {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  jqueryCode: string;
  angularCode: string;
  explanation: string;
  tips: string[];
}

const recipes: Recipe[] = [
  {
    id: 'dom-manipulation',
    title: 'DOM Manipulation',
    category: 'Basic Operations',
    difficulty: 'Beginner',
    description: 'Learn how to manipulate DOM elements without jQuery selectors',
    jqueryCode: `// jQuery approach
$('#myElement').text('Hello World');
$('.my-class').hide();
$('#container').append('<p>New paragraph</p>');

// Adding CSS classes
$('#myElement').addClass('active');
$('#myElement').removeClass('inactive');`,
    angularCode: `// Angular approach
// In component.ts
export class MyComponent {
  message = 'Hello World';
  isVisible = true;
  items = ['Item 1', 'Item 2'];
  
  addItem() {
    this.items.push('New Item');
  }
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

// In template.html
<div id="myElement" [class.active]="isActive">
  {{ message }}
</div>
<div [hidden]="!isVisible">Content</div>
<div *ngFor="let item of items">{{ item }}</div>`,
    explanation: 'Angular uses data binding instead of direct DOM manipulation. The framework automatically updates the DOM when component properties change.',
    tips: [
      'Use property binding [property] for dynamic values',
      'Use *ngFor for dynamic lists instead of append()',
      'Leverage Angular\'s change detection instead of manual DOM updates'
    ]
  },
  {
    id: 'event-handling',
    title: 'Event Handling',
    category: 'User Interaction',
    difficulty: 'Beginner',
    description: 'Convert jQuery event handlers to Angular event binding',
    jqueryCode: `// jQuery approach
$('#submitBtn').on('click', function(e) {
  e.preventDefault();
  const value = $('#inputField').val();
  console.log('Submitted:', value);
});

$('.item').on('mouseover', function() {
  $(this).addClass('hovered');
});

// Event delegation
$(document).on('click', '.dynamic-btn', function() {
  // Handle dynamically added buttons
});`,
    angularCode: `// Angular approach
// In component.ts
export class MyComponent {
  inputValue = '';
  
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Submitted:', this.inputValue);
  }
  
  onMouseOver(item: any) {
    item.hovered = true;
  }
  
  onDynamicClick(event: Event) {
    // Handle click on dynamically rendered elements
  }
}

// In template.html
<form (submit)="onSubmit($event)">
  <input [(ngModel)]="inputValue" type="text">
  <button type="submit">Submit</button>
</form>

<div *ngFor="let item of items" 
     (mouseover)="onMouseOver(item)"
     [class.hovered]="item.hovered">
  {{ item.name }}
</div>`,
    explanation: 'Angular uses event binding with parentheses syntax. Two-way data binding eliminates the need to manually get/set form values.',
    tips: [
      'Use (event)="method()" syntax for event binding',
      'Two-way binding [(ngModel)] handles form inputs automatically',
      'Event delegation is built-in with *ngFor and event binding'
    ]
  },
  {
    id: 'ajax-requests',
    title: 'AJAX Requests',
    category: 'HTTP Operations',
    difficulty: 'Intermediate',
    description: 'Replace jQuery AJAX with Angular HttpClient',
    jqueryCode: `// jQuery approach
$.ajax({
  url: '/api/users',
  method: 'GET',
  dataType: 'json',
  success: function(data) {
    console.log('Users loaded:', data);
    displayUsers(data);
  },
  error: function(xhr, status, error) {
    console.error('Error:', error);
  }
});

// POST request
$.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com'
}).done(function(response) {
  console.log('User created:', response);
});`,
    angularCode: `// Angular approach
// In service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }
}

// In component.ts
export class UserComponent {
  users: User[] = [];
  
  constructor(private userService: UserService) {}
  
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  
  createUser(userData: User) {
    this.userService.createUser(userData).subscribe({
      next: (response) => {
        console.log('User created:', response);
        this.loadUsers(); // Refresh list
      }
    });
  }
}`,
    explanation: 'Angular uses HttpClient service with Observables for HTTP requests. This provides better error handling, interceptors, and type safety.',
    tips: [
      'Import HttpClientModule in your app module',
      'Create dedicated services for API calls',
      'Use Observables for reactive programming patterns',
      'Leverage TypeScript interfaces for type safety'
    ]
  },
  {
    id: 'animations',
    title: 'Animations',
    category: 'UI Effects',
    difficulty: 'Advanced',
    description: 'Convert jQuery animations to Angular Animations API',
    jqueryCode: `// jQuery approach
$('#fadeElement').fadeIn(500);
$('#slideElement').slideUp(300);

$('#animateElement').animate({
  opacity: 0.5,
  height: '200px',
  width: '200px'
}, 1000);

// Chain animations
$('#chainElement')
  .fadeOut(300)
  .slideDown(500)
  .fadeIn(400);`,
    angularCode: `// Angular approach
// Import animations module
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animated',
  template: \`
    <div [@fadeIn]="fadeState" class="fade-element">
      Fade content
    </div>
    <div [@slideAnimation]="slideState" class="slide-element">
      Slide content
    </div>
    <div [@complexAnimation]="animState" class="complex-element">
      Complex animation
    </div>
  \`,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideAnimation', [
      state('up', style({ height: '0px', overflow: 'hidden' })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate('300ms ease-in-out'))
    ]),
    trigger('complexAnimation', [
      state('initial', style({
        opacity: 1,
        height: '100px',
        width: '100px'
      })),
      state('final', style({
        opacity: 0.5,
        height: '200px',
        width: '200px'
      })),
      transition('initial => final', animate('1000ms ease-in-out'))
    ])
  ]
})
export class AnimatedComponent {
  fadeState = 'in';
  slideState = 'down';
  animState = 'initial';
  
  toggleSlide() {
    this.slideState = this.slideState === 'up' ? 'down' : 'up';
  }
  
  startComplexAnimation() {
    this.animState = this.animState === 'initial' ? 'final' : 'initial';
  }
}`,
    explanation: 'Angular Animations API provides declarative, state-based animations with better performance and control than jQuery animations.',
    tips: [
      'Import BrowserAnimationsModule in your app module',
      'Use triggers and states for reusable animations',
      'Leverage :enter and :leave pseudo-states',
      'Combine multiple animations for complex effects'
    ]
  },
  {
    id: 'form-validation',
    title: 'Form Validation',
    category: 'Forms & Validation',
    difficulty: 'Intermediate',
    description: 'Replace jQuery form validation with Angular Reactive Forms',
    jqueryCode: `// jQuery approach
$('#myForm').on('submit', function(e) {
  e.preventDefault();
  
  // Clear previous errors
  $('.error').remove();
  
  let isValid = true;
  
  // Validate email
  const email = $('#email').val();
  if (!email || !isValidEmail(email)) {
    $('#email').after('<span class="error">Valid email required</span>');
    isValid = false;
  }
  
  // Validate password
  const password = $('#password').val();
  if (!password || password.length < 8) {
    $('#password').after('<span class="error">Password must be 8+ chars</span>');
    isValid = false;
  }
  
  if (isValid) {
    // Submit form
    submitForm({ email, password });
  }
});

function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`,
    angularCode: `// Angular approach
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.submitForm(formData);
    } else {
      this.markFormGroupTouched();
    }
  }
  
  markFormGroupTouched() {
    Object.keys(this.loginForm.controls).forEach(key => {
      this.loginForm.get(key)?.markAsTouched();
    });
  }
  
  getErrorMessage(field: string): string {
    const control = this.loginForm.get(field);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return \`\${field} is required\`;
      if (control.errors['email']) return 'Invalid email format';
      if (control.errors['minlength']) return \`\${field} must be at least 8 characters\`;
    }
    return '';
  }
}

// Template
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <div>
    <input formControlName="email" type="email" placeholder="Email">
    <span class="error">{{ getErrorMessage('email') }}</span>
  </div>
  <div>
    <input formControlName="password" type="password" placeholder="Password">
    <span class="error">{{ getErrorMessage('password') }}</span>
  </div>
  <button type="submit" [disabled]="loginForm.invalid">Submit</button>
</form>`,
    explanation: 'Angular Reactive Forms provide built-in validation with better type safety and testability than jQuery validation.',
    tips: [
      'Import ReactiveFormsModule in your module',
      'Use built-in validators for common validation rules',
      'Create custom validators for complex business logic',
      'Leverage form state (valid, invalid, touched, dirty) for UI feedback'
    ]
  },
  {
    id: 'data-tables',
    title: 'Dynamic Data Tables',
    category: 'Data Display',
    difficulty: 'Intermediate',
    description: 'Convert jQuery DataTables to Angular data tables with sorting and filtering',
    jqueryCode: `// jQuery approach
$(document).ready(function() {
  // Initialize DataTable
  $('#dataTable').DataTable({
    ajax: '/api/users',
    columns: [
      { data: 'name' },
      { data: 'email' },
      { data: 'role' },
      { 
        data: null,
        render: function(data, type, row) {
          return '<button onclick="editUser(' + row.id + ')">Edit</button>' +
                 '<button onclick="deleteUser(' + row.id + ')">Delete</button>';
        }
      }
    ],
    order: [[0, 'asc']],
    pageLength: 10
  });
});

function editUser(id) {
  // Edit user logic
}

function deleteUser(id) {
  if (confirm('Delete user?')) {
    $.ajax({
      url: '/api/users/' + id,
      method: 'DELETE',
      success: function() {
        $('#dataTable').DataTable().ajax.reload();
      }
    });
  }
}`,
    angularCode: `// Angular approach
export class UserTableComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  sortColumn = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  searchTerm = '';
  currentPage = 1;
  pageSize = 10;
  
  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.loadUsers();
  }
  
  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilters();
    });
  }
  
  applyFilters() {
    let filtered = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
    // Sort
    filtered.sort((a, b) => {
      const aVal = a[this.sortColumn];
      const bVal = b[this.sortColumn];
      const result = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return this.sortDirection === 'asc' ? result : -result;
    });
    
    this.filteredUsers = filtered;
  }
  
  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.applyFilters();
  }
  
  editUser(user: User) {
    // Navigate to edit form or open modal
  }
  
  deleteUser(user: User) {
    if (confirm('Delete user?')) {
      this.userService.deleteUser(user.id).subscribe(() => {
        this.loadUsers();
      });
    }
  }
  
  get paginatedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers.slice(start, start + this.pageSize);
  }
}

// Template
<div>
  <input [(ngModel)]="searchTerm" (input)="applyFilters()" placeholder="Search...">
  
  <table>
    <thead>
      <tr>
        <th (click)="sort('name')" [class.sorted]="sortColumn === 'name'">
          Name <span [class]="sortDirection"></span>
        </th>
        <th (click)="sort('email')" [class.sorted]="sortColumn === 'email'">Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of paginatedUsers">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button (click)="editUser(user)">Edit</button>
          <button (click)="deleteUser(user)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    explanation: 'Angular provides reactive data binding and built-in directives for creating dynamic tables without external libraries.',
    tips: [
      'Use *ngFor for dynamic row rendering',
      'Implement sorting and filtering with component methods',
      'Consider Angular Material Table for advanced features',
      'Use trackBy functions for better performance with large datasets'
    ]
  },
  {
    id: 'modal-dialogs',
    title: 'Modal Dialogs',
    category: 'UI Components',
    difficulty: 'Intermediate',
    description: 'Replace jQuery modal plugins with Angular modal components',
    jqueryCode: `// jQuery approach
// Initialize modal
$('#myModal').modal({
  backdrop: 'static',
  keyboard: false
});

// Show modal
$('#openModal').on('click', function() {
  $('#myModal').modal('show');
});

// Handle modal events
$('#myModal').on('shown.bs.modal', function() {
  $('#modalInput').focus();
});

$('#myModal').on('hidden.bs.modal', function() {
  $(this).find('form')[0].reset();
});

// Close modal
$('#saveBtn').on('click', function() {
  const data = $('#modalForm').serialize();
  
  $.post('/api/save', data)
    .done(function() {
      $('#myModal').modal('hide');
      showSuccess('Data saved!');
    })
    .fail(function() {
      showError('Save failed!');
    });
});`,
    angularCode: `// Angular approach
// modal.component.ts
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: \`
    <div class="modal-overlay" *ngIf="isOpen" (click)="onOverlayClick($event)">
      <div class="modal-content" #modalContent>
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button (click)="close()" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        <div class="modal-footer">
          <button (click)="close()" class="btn-cancel">Cancel</button>
          <button (click)="save()" class="btn-save" [disabled]="!canSave">Save</button>
        </div>
      </div>
    </div>
  \`
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() canSave = true;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<any>();
  @ViewChild('modalContent') modalContent!: ElementRef;
  
  ngAfterViewInit() {
    if (this.isOpen) {
      this.focusModal();
    }
  }
  
  ngOnChanges() {
    if (this.isOpen) {
      setTimeout(() => this.focusModal(), 0);
    }
  }
  
  focusModal() {
    const firstInput = this.modalContent.nativeElement.querySelector('input, textarea, select');
    if (firstInput) {
      firstInput.focus();
    }
  }
  
  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
  
  close() {
    this.isOpen = false;
    this.closed.emit();
  }
  
  save() {
    this.saved.emit();
  }
}

// parent.component.ts
export class ParentComponent {
  isModalOpen = false;
  formData = { name: '', email: '' };
  
  openModal() {
    this.isModalOpen = true;
  }
  
  onModalClosed() {
    this.isModalOpen = false;
    this.resetForm();
  }
  
  onModalSaved() {
    this.dataService.save(this.formData).subscribe({
      next: () => {
        this.isModalOpen = false;
        this.showSuccess('Data saved!');
        this.resetForm();
      },
      error: () => {
        this.showError('Save failed!');
      }
    });
  }
  
  resetForm() {
    this.formData = { name: '', email: '' };
  }
}

// Template usage
<button (click)="openModal()">Open Modal</button>

<app-modal 
  [isOpen]="isModalOpen"
  title="Edit User"
  [canSave]="formData.name && formData.email"
  (closed)="onModalClosed()"
  (saved)="onModalSaved()">
  
  <form>
    <input [(ngModel)]="formData.name" placeholder="Name" required>
    <input [(ngModel)]="formData.email" placeholder="Email" type="email" required>
  </form>
</app-modal>`,
    explanation: 'Angular modals are built as reusable components with proper lifecycle management and data binding instead of DOM manipulation.',
    tips: [
      'Create reusable modal components with @Input and @Output',
      'Use ViewChild to access modal elements for focus management',
      'Implement proper keyboard navigation and accessibility',
      'Consider using Angular CDK Overlay for advanced modal features'
    ]
  },
  {
    id: 'autocomplete-typeahead',
    title: 'Autocomplete/Typeahead',
    category: 'User Interaction',
    difficulty: 'Advanced',
    description: 'Convert jQuery autocomplete to Angular with reactive search',
    jqueryCode: `// jQuery approach
$('#searchInput').autocomplete({
  source: function(request, response) {
    $.ajax({
      url: '/api/search',
      data: { term: request.term },
      success: function(data) {
        response(data.map(item => ({
          label: item.name,
          value: item.id
        })));
      }
    });
  },
  minLength: 2,
  delay: 300,
  select: function(event, ui) {
    console.log('Selected:', ui.item);
    $('#selectedValue').text(ui.item.label);
  }
});

// Custom styling and events
$('#searchInput').on('autocompleteopen', function() {
  $('.ui-autocomplete').css('z-index', 9999);
});`,
    angularCode: `// Angular approach
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class AutocompleteComponent implements OnInit {
  searchControl = new FormControl();
  filteredOptions: Observable<any[]>;
  selectedItem: any = null;
  isLoading = false;
  
  constructor(private searchService: SearchService) {}
  
  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => {
        if (typeof value === 'string' && value.length >= 2) {
          this.isLoading = true;
          return this.searchService.search(value).pipe(
            finalize(() => this.isLoading = false)
          );
        }
        return of([]);
      })
    );
  }
  
  displayFn(item: any): string {
    return item ? item.name : '';
  }
  
  onSelectionChange(event: any) {
    this.selectedItem = event.option.value;
    console.log('Selected:', this.selectedItem);
  }
  
  onInputFocus() {
    // Handle focus events
  }
  
  onInputBlur() {
    // Handle blur events
  }
}

// search.service.ts
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) {}
  
  search(term: string): Observable<any[]> {
    return this.http.get<any[]>('/api/search', {
      params: { term }
    });
  }
}

// Template
<div class="autocomplete-container">
  <mat-form-field>
    <input 
      matInput
      [formControl]="searchControl"
      [matAutocomplete]="auto"
      placeholder="Search..."
      (focus)="onInputFocus()"
      (blur)="onInputBlur()">
    
    <mat-spinner *ngIf="isLoading" matSuffix diameter="20"></mat-spinner>
  </mat-form-field>
  
  <mat-autocomplete 
    #auto="matAutocomplete"
    [displayWith]="displayFn"
    (selectionChange)="onSelectionChange($event)">
    
    <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
      <div class="option-content">
        <strong>{{ option.name }}</strong>
        <small>{{ option.description }}</small>
      </div>
    </mat-option>
  </mat-autocomplete>
  
  <div *ngIf="selectedItem" class="selected-item">
    Selected: {{ selectedItem.name }}
  </div>
</div>

// Custom implementation without Material
<div class="custom-autocomplete">
  <input 
    [formControl]="searchControl"
    placeholder="Search..."
    (focus)="showDropdown = true">
  
  <div class="dropdown" *ngIf="showDropdown && (filteredOptions | async)?.length">
    <div 
      *ngFor="let option of filteredOptions | async; trackBy: trackByFn"
      class="dropdown-item"
      (click)="selectOption(option)">
      {{ option.name }}
    </div>
  </div>
</div>`,
    explanation: 'Angular autocomplete uses reactive forms with RxJS operators for debouncing and API calls, providing better performance and user experience.',
    tips: [
      'Use debounceTime to limit API calls',
      'Implement distinctUntilChanged to avoid duplicate requests',
      'Use switchMap to cancel previous requests',
      'Consider Angular Material Autocomplete for ready-to-use component'
    ]
  },
  {
    id: 'drag-drop',
    title: 'Drag and Drop',
    category: 'User Interaction',
    difficulty: 'Advanced',
    description: 'Convert jQuery UI draggable/droppable to Angular CDK Drag Drop',
    jqueryCode: `// jQuery approach
$(function() {
  // Make items draggable
  $('.draggable-item').draggable({
    helper: 'clone',
    revert: 'invalid',
    start: function(event, ui) {
      $(this).addClass('dragging');
    },
    stop: function(event, ui) {
      $(this).removeClass('dragging');
    }
  });
  
  // Make containers droppable
  $('.drop-zone').droppable({
    accept: '.draggable-item',
    hoverClass: 'drop-hover',
    drop: function(event, ui) {
      const draggedItem = ui.draggable;
      const dropZone = $(this);
      
      // Move item to new container
      draggedItem.appendTo(dropZone);
      
      // Update data
      updateItemPosition(draggedItem.data('id'), dropZone.data('zone-id'));
    }
  });
  
  // Sortable lists
  $('.sortable-list').sortable({
    connectWith: '.sortable-list',
    placeholder: 'sort-placeholder',
    update: function(event, ui) {
      const newOrder = $(this).sortable('toArray', { attribute: 'data-id' });
      updateListOrder(newOrder);
    }
  });
});`,
    angularCode: `// Angular approach
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export class DragDropComponent {
  todoItems = [
    { id: 1, text: 'Task 1', status: 'todo' },
    { id: 2, text: 'Task 2', status: 'todo' }
  ];
  
  inProgressItems = [
    { id: 3, text: 'Task 3', status: 'in-progress' }
  ];
  
  doneItems = [
    { id: 4, text: 'Task 4', status: 'done' }
  ];
  
  // Handle drop events
  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // Reorder within same container
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move between containers
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      
      // Update item status
      const item = event.container.data[event.currentIndex];
      item.status = this.getStatusFromContainer(event.container.id);
      
      // Save to backend
      this.updateItemStatus(item);
    }
  }
  
  getStatusFromContainer(containerId: string): string {
    switch (containerId) {
      case 'todo-list': return 'todo';
      case 'progress-list': return 'in-progress';
      case 'done-list': return 'done';
      default: return 'todo';
    }
  }
  
  updateItemStatus(item: any) {
    this.taskService.updateTask(item).subscribe();
  }
  
  // Custom drag predicate
  dragPredicate(item: CdkDrag<any>): boolean {
    return !item.data.locked;
  }
  
  // Track items for performance
  trackByFn(index: number, item: any): any {
    return item.id;
  }
}

// Template
<div class="kanban-board">
  <div class="column">
    <h3>To Do</h3>
    <div 
      cdkDropList
      id="todo-list"
      [cdkDropListData]="todoItems"
      [cdkDropListConnectedTo]="['progress-list', 'done-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of todoItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        [cdkDragDisabled]="item.locked"
        class="drag-item">
        
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
        
        <!-- Custom drag preview -->
        <div *cdkDragPreview class="drag-preview">
          {{ item.text }}
        </div>
        
        <!-- Placeholder while dragging -->
        <div *cdkDragPlaceholder class="drag-placeholder"></div>
      </div>
    </div>
  </div>
  
  <div class="column">
    <h3>In Progress</h3>
    <div 
      cdkDropList
      id="progress-list"
      [cdkDropListData]="inProgressItems"
      [cdkDropListConnectedTo]="['todo-list', 'done-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of inProgressItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        class="drag-item">
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
      </div>
    </div>
  </div>
  
  <div class="column">
    <h3>Done</h3>
    <div 
      cdkDropList
      id="done-list"
      [cdkDropListData]="doneItems"
      [cdkDropListConnectedTo]="['todo-list', 'progress-list']"
      (cdkDropListDropped)="onDrop($event)"
      class="drop-zone">
      
      <div 
        *ngFor="let item of doneItems; trackBy: trackByFn"
        cdkDrag
        [cdkDragData]="item"
        class="drag-item">
        <div class="drag-handle" cdkDragHandle>⋮⋮</div>
        <div class="item-content">{{ item.text }}</div>
      </div>
    </div>
  </div>
</div>`,
    explanation: 'Angular CDK Drag Drop provides a complete drag and drop solution with better accessibility, touch support, and integration with Angular\'s change detection.',
    tips: [
      'Import DragDropModule from @angular/cdk/drag-drop',
      'Use cdkDropListConnectedTo for cross-container drops',
      'Implement trackBy functions for better performance',
      'Customize drag previews and placeholders for better UX'
    ]
  },
  {
    id: 'infinite-scroll',
    title: 'Infinite Scroll',
    category: 'Performance',
    difficulty: 'Advanced',
    description: 'Replace jQuery infinite scroll with Angular CDK Virtual Scrolling',
    jqueryCode: `// jQuery approach
let page = 1;
let loading = false;
let hasMore = true;

$(window).on('scroll', function() {
  if (loading || !hasMore) return;
  
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const documentHeight = $(document).height();
  
  // Load more when near bottom
  if (scrollTop + windowHeight >= documentHeight - 100) {
    loadMoreItems();
  }
});

function loadMoreItems() {
  loading = true;
  $('#loading').show();
  
  $.ajax({
    url: '/api/items',
    data: { page: page, limit: 20 },
    success: function(response) {
      if (response.items.length === 0) {
        hasMore = false;
        $('#no-more').show();
      } else {
        response.items.forEach(function(item) {
          $('#items-container').append(
            '<div class="item">' + item.title + '</div>'
          );
        });
        page++;
      }
    },
    complete: function() {
      loading = false;
      $('#loading').hide();
    }
  });
}

// Initial load
loadMoreItems();`,
    angularCode: `// Angular approach with Virtual Scrolling
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan, switchMap, tap } from 'rxjs/operators';

export class InfiniteScrollComponent implements OnInit {
  items$: Observable<any[]>;
  loading$ = new BehaviorSubject(false);
  page$ = new BehaviorSubject(1);
  hasMore = true;
  
  // Virtual scrolling properties
  itemSize = 50;
  
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    // Set up infinite scroll stream
    this.items$ = this.page$.pipe(
      tap(() => this.loading$.next(true)),
      switchMap(page => 
        this.dataService.getItems(page, 20).pipe(
          tap(response => {
            this.hasMore = response.items.length === 20;
            this.loading$.next(false);
          })
        )
      ),
      scan((acc, response) => {
        return page === 1 ? response.items : [...acc, ...response.items];
      }, [])
    );
  }
  
  loadMore() {
    if (!this.loading$.value && this.hasMore) {
      this.page$.next(this.page$.value + 1);
    }
  }
  
  trackByFn(index: number, item: any): any {
    return item.id;
  }
  
  refresh() {
    this.page$.next(1);
    this.hasMore = true;
  }
}

// Alternative: Intersection Observer approach
export class IntersectionScrollComponent implements OnInit, OnDestroy {
  @ViewChild('loadTrigger', { static: false }) loadTrigger!: ElementRef;
  
  items: any[] = [];
  loading = false;
  page = 1;
  hasMore = true;
  
  private observer!: IntersectionObserver;
  
  ngOnInit() {
    this.loadItems();
  }
  
  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }
  
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.loading && this.hasMore) {
          this.loadItems();
        }
      },
      { threshold: 0.1 }
    );
    
    this.observer.observe(this.loadTrigger.nativeElement);
  }
  
  loadItems() {
    this.loading = true;
    
    this.dataService.getItems(this.page, 20).subscribe({
      next: (response) => {
        if (response.items.length === 0) {
          this.hasMore = false;
        } else {
          this.items = [...this.items, ...response.items];
          this.page++;
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}

// Template with Virtual Scrolling
<div class="infinite-scroll-container">
  <cdk-virtual-scroll-viewport 
    [itemSize]="itemSize" 
    class="viewport">
    
    <div 
      *cdkVirtualFor="let item of items$ | async; trackBy: trackByFn"
      class="scroll-item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </cdk-virtual-scroll-viewport>
  
  <div *ngIf="loading$ | async" class="loading">
    Loading more items...
  </div>
  
  <div *ngIf="!hasMore" class="no-more">
    No more items to load
  </div>
</div>

// Template with Intersection Observer
<div class="scroll-container">
  <div *ngFor="let item of items; trackBy: trackByFn" class="item">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
  
  <div #loadTrigger class="load-trigger">
    <div *ngIf="loading" class="loading">Loading...</div>
    <div *ngIf="!hasMore" class="no-more">No more items</div>
  </div>
</div>`,
    explanation: 'Angular provides multiple approaches for infinite scroll: CDK Virtual Scrolling for performance with large lists, and Intersection Observer API for traditional infinite scroll.',
    tips: [
      'Use CDK Virtual Scrolling for large datasets to improve performance',
      'Implement Intersection Observer for better scroll detection',
      'Use RxJS operators like scan to accumulate paginated results',
      'Always implement proper loading states and error handling'
    ]
  },
  {
    id: 'file-upload',
    title: 'File Upload with Progress',
    category: 'File Operations',
    difficulty: 'Intermediate',
    description: 'Convert jQuery file upload with progress to Angular HttpClient',
    jqueryCode: `// jQuery approach
$('#fileInput').on('change', function(e) {
  const files = e.target.files;
  
  for (let i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
});

function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  const progressBar = createProgressBar(file.name);
  
  $.ajax({
    url: '/api/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    xhr: function() {
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', function(e) {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          updateProgressBar(progressBar, percentComplete);
        }
      });
      
      return xhr;
    },
    success: function(response) {
      showSuccess('File uploaded: ' + file.name);
      removeProgressBar(progressBar);
    },
    error: function() {
      showError('Upload failed: ' + file.name);
      removeProgressBar(progressBar);
    }
  });
}

// Drag and drop
$('#dropZone').on('dragover', function(e) {
  e.preventDefault();
  $(this).addClass('drag-over');
});

$('#dropZone').on('drop', function(e) {
  e.preventDefault();
  $(this).removeClass('drag-over');
  
  const files = e.originalEvent.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    uploadFile(files[i]);
  }
});`,
    angularCode: `// Angular approach
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface UploadProgress {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  response?: any;
}

@Component({
  selector: 'app-file-upload',
  template: \`
    <div class="upload-container">
      <!-- File Input -->
      <div class="file-input-wrapper">
        <input 
          #fileInput
          type="file" 
          multiple 
          (change)="onFilesSelected($event)"
          accept="image/*,.pdf,.doc,.docx"
          class="file-input">
        <button (click)="fileInput.click()" class="upload-btn">
          Choose Files
        </button>
      </div>
      
      <!-- Drag and Drop Zone -->
      <div 
        class="drop-zone"
        [class.drag-over]="isDragOver"
        (dragover)="onDragOver($event)"
        (dragleave)="onDragLeave($event)"
        (drop)="onDrop($event)">
        <p>Drag and drop files here or click to select</p>
      </div>
      
      <!-- Upload Progress -->
      <div class="upload-progress" *ngIf="uploads.length > 0">
        <div 
          *ngFor="let upload of uploads; trackBy: trackByFile"
          class="upload-item">
          
          <div class="file-info">
            <span class="file-name">{{ upload.file.name }}</span>
            <span class="file-size">{{ formatFileSize(upload.file.size) }}</span>
          </div>
          
          <div class="progress-container">
            <div class="progress-bar">
              <div 
                class="progress-fill"
                [style.width.%]="upload.progress"
                [class]="upload.status">
              </div>
            </div>
            <span class="progress-text">{{ upload.progress }}%</span>
          </div>
          
          <div class="upload-status">
            <span *ngIf="upload.status === 'uploading'">Uploading...</span>
            <span *ngIf="upload.status === 'completed'" class="success">✓ Complete</span>
            <span *ngIf="upload.status === 'error'" class="error">✗ Failed</span>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class FileUploadComponent {
  uploads: UploadProgress[] = [];
  isDragOver = false;
  
  constructor(private http: HttpClient) {}
  
  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(Array.from(input.files));
    }
  }
  
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }
  
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
  }
  
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }
  
  handleFiles(files: File[]) {
    files.forEach(file => {
      if (this.validateFile(file)) {
        this.uploadFile(file);
      }
    });
  }
  
  validateFile(file: File): boolean {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/', 'application/pdf', 'application/msword'];
    
    if (file.size > maxSize) {
      alert(\`File \${file.name} is too large. Maximum size is 10MB.\`);
      return false;
    }
    
    if (!allowedTypes.some(type => file.type.startsWith(type))) {
      alert(\`File \${file.name} is not a supported format.\`);
      return false;
    }
    
    return true;
  }
  
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    const uploadProgress: UploadProgress = {
      file,
      progress: 0,
      status: 'uploading'
    };
    
    this.uploads.push(uploadProgress);
    
    const request = new HttpRequest('POST', '/api/upload', formData, {
      reportProgress: true
    });
    
    this.http.request(request).subscribe({
      next: (event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              uploadProgress.progress = Math.round(100 * event.loaded / event.total);
            }
            break;
          case HttpEventType.Response:
            uploadProgress.status = 'completed';
            uploadProgress.response = event.body;
            break;
        }
      },
      error: (error) => {
        uploadProgress.status = 'error';
        console.error('Upload error:', error);
      }
    });
  }
  
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  trackByFile(index: number, upload: UploadProgress): string {
    return upload.file.name + upload.file.size;
  }
  
  clearCompleted() {
    this.uploads = this.uploads.filter(upload => upload.status !== 'completed');
  }
  
  retryFailed() {
    this.uploads
      .filter(upload => upload.status === 'error')
      .forEach(upload => {
        upload.status = 'uploading';
        upload.progress = 0;
        this.uploadFile(upload.file);
      });
  }
}

// upload.service.ts
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}
  
  uploadMultipleFiles(files: File[]): Observable<any> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });
    
    return this.http.post('/api/upload-multiple', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
  
  uploadWithMetadata(file: File, metadata: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));
    
    return this.http.post('/api/upload-with-metadata', formData);
  }
}`,
    explanation: 'Angular HttpClient provides built-in support for upload progress tracking and better error handling compared to jQuery AJAX.',
    tips: [
      'Use HttpRequest with reportProgress: true for progress tracking',
      'Implement proper file validation before upload',
      'Handle drag and drop events for better UX',
      'Use FormData for multipart file uploads'
    ]
  },
  {
    id: 'real-time-updates',
    title: 'Real-time Updates (WebSockets)',
    category: 'Real-time Communication',
    difficulty: 'Advanced',
    description: 'Replace jQuery WebSocket handling with Angular WebSocket service',
    jqueryCode: `// jQuery approach
let socket;
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

function connectWebSocket() {
  socket = new WebSocket('ws://localhost:8080/ws');
  
  socket.onopen = function(event) {
    console.log('Connected to WebSocket');
    reconnectAttempts = 0;
    $('#connection-status').text('Connected').removeClass('disconnected');
    
    // Send authentication
    socket.send(JSON.stringify({
      type: 'auth',
      token: localStorage.getItem('authToken')
    }));
  };
  
  socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    handleMessage(data);
  };
  
  socket.onclose = function(event) {
    console.log('WebSocket connection closed');
    $('#connection-status').text('Disconnected').addClass('disconnected');
    
    // Attempt to reconnect
    if (reconnectAttempts < maxReconnectAttempts) {
      setTimeout(() => {
        reconnectAttempts++;
        connectWebSocket();
      }, 1000 * Math.pow(2, reconnectAttempts));
    }
  };
  
  socket.onerror = function(error) {
    console.error('WebSocket error:', error);
  };
}

function handleMessage(data) {
  switch (data.type) {
    case 'notification':
      showNotification(data.message);
      break;
    case 'user_update':
      updateUserList(data.users);
      break;
    case 'chat_message':
      addChatMessage(data);
      break;
  }
}

function sendMessage(type, payload) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({ type, ...payload }));
  }
}

// Send chat message
$('#chatForm').on('submit', function(e) {
  e.preventDefault();
  const message = $('#messageInput').val();
  
  sendMessage('chat_message', {
    message: message,
    timestamp: Date.now()
  });
  
  $('#messageInput').val('');
});

// Initialize connection
connectWebSocket();`,
    angularCode: `// Angular approach
// websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, timer } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { retry, retryWhen, delay, take } from 'rxjs/operators';

export interface WebSocketMessage {
  type: string;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject<WebSocketMessage>();
  private connectionStatus$ = new BehaviorSubject<boolean>(false);
  
  public messages$ = this.messagesSubject$.asObservable();
  public connectionStatus = this.connectionStatus$.asObservable();
  
  constructor() {
    this.connect();
  }
  
  private connect(): void {
    this.socket$ = webSocket({
      url: 'ws://localhost:8080/ws',
      openObserver: {
        next: () => {
          console.log('WebSocket connected');
          this.connectionStatus$.next(true);
          this.authenticate();
        }
      },
      closeObserver: {
        next: () => {
          console.log('WebSocket disconnected');
          this.connectionStatus$.next(false);
        }
      }
    });
    
    // Handle incoming messages
    this.socket$.pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000),
          take(5)
        )
      )
    ).subscribe({
      next: (message) => this.messagesSubject$.next(message),
      error: (error) => console.error('WebSocket error:', error)
    });
  }
  
  private authenticate(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.sendMessage({
        type: 'auth',
        token: token
      });
    }
  }
  
  public sendMessage(message: WebSocketMessage): void {
    if (this.socket$) {
      this.socket$.next(message);
    }
  }
  
  public disconnect(): void {
    if (this.socket$) {
      this.socket$.complete();
      this.connectionStatus$.next(false);
    }
  }
  
  public reconnect(): void {
    this.disconnect();
    this.connect();
  }
}

// chat.component.ts
export class ChatComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  users: any[] = [];
  newMessage = '';
  isConnected$ = this.wsService.connectionStatus;
  
  private destroy$ = new Subject<void>();
  
  constructor(private wsService: WebSocketService) {}
  
  ngOnInit() {
    // Subscribe to WebSocket messages
    this.wsService.messages$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(message => {
      this.handleMessage(message);
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  private handleMessage(message: WebSocketMessage) {
    switch (message.type) {
      case 'notification':
        this.showNotification(message.message);
        break;
      case 'user_update':
        this.users = message.users;
        break;
      case 'chat_message':
        this.messages.push(message);
        this.scrollToBottom();
        break;
      case 'user_joined':
        this.showNotification(\`\${message.username} joined the chat\`);
        break;
      case 'user_left':
        this.showNotification(\`\${message.username} left the chat\`);
        break;
    }
  }
  
  sendMessage() {
    if (this.newMessage.trim()) {
      this.wsService.sendMessage({
        type: 'chat_message',
        message: this.newMessage,
        timestamp: Date.now()
      });
      this.newMessage = '';
    }
  }
  
  private scrollToBottom() {
    setTimeout(() => {
      const chatContainer = document.getElementById('chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 0);
  }
  
  private showNotification(message: string) {
    // Show toast notification or update UI
    console.log('Notification:', message);
  }
  
  reconnect() {
    this.wsService.reconnect();
  }
}

// Template
<div class="chat-container">
  <div class="connection-status">
    <span [class]="(isConnected$ | async) ? 'connected' : 'disconnected'">
      {{ (isConnected$ | async) ? 'Connected' : 'Disconnected' }}
    </span>
    <button *ngIf="!(isConnected$ | async)" (click)="reconnect()">
      Reconnect
    </button>
  </div>
  
  <div class="chat-users">
    <h4>Online Users ({{ users.length }})</h4>
    <ul>
      <li *ngFor="let user of users">{{ user.username }}</li>
    </ul>
  </div>
  
  <div id="chat-messages" class="chat-messages">
    <div 
      *ngFor="let message of messages; trackBy: trackByMessage"
      class="message">
      <span class="username">{{ message.username }}:</span>
      <span class="text">{{ message.message }}</span>
      <span class="timestamp">{{ message.timestamp | date:'short' }}</span>
    </div>
  </div>
  
  <form (ngSubmit)="sendMessage()" class="message-form">
    <input 
      [(ngModel)]="newMessage"
      placeholder="Type a message..."
      [disabled]="!(isConnected$ | async)"
      class="message-input">
    <button 
      type="submit" 
      [disabled]="!newMessage.trim() || !(isConnected$ | async)"
      class="send-button">
      Send
    </button>
  </form>
</div>`,
    explanation: 'Angular WebSocket service using RxJS provides better error handling, automatic reconnection, and reactive programming patterns for real-time updates.',
    tips: [
      'Use RxJS WebSocketSubject for reactive WebSocket handling',
      'Implement proper error handling and reconnection logic',
      'Use takeUntil pattern to prevent memory leaks',
      'Consider using Socket.IO for more advanced real-time features'
    ]
  }
];

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categories = ['All', ...Array.from(new Set(recipes.map(r => r.category)))];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                jQuery → Angular Migration Guide
              </h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedRecipe ? (
          <>
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Master the Migration
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transform your jQuery skills into Angular expertise with practical recipes, 
                real-world examples, and step-by-step guidance for modern web development.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recipe Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe)}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)} dark:bg-opacity-20`}>
                        {recipe.difficulty}
                      </span>
                      <Zap className="h-5 w-5 text-yellow-500" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {recipe.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {recipe.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {recipe.category}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Recipe Detail View */
          <div>
            <button
              onClick={() => setSelectedRecipe(null)}
              className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Recipes
            </button>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedRecipe.title}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedRecipe.difficulty)} dark:bg-opacity-20`}>
                    {selectedRecipe.difficulty}
                  </span>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {selectedRecipe.description}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Category: {selectedRecipe.category}
                </p>
              </div>

              {/* Code Comparison */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center">
                    <span className="bg-red-100 dark:bg-red-900 dark:bg-opacity-30 px-2 py-1 rounded text-sm mr-2">Before</span>
                    jQuery Approach
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
                      <code>{selectedRecipe.jqueryCode}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center">
                    <span className="bg-green-100 dark:bg-green-900 dark:bg-opacity-30 px-2 py-1 rounded text-sm mr-2">After</span>
                    Angular Approach
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
                      <code>{selectedRecipe.angularCode}</code>
                    </pre>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Explanation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedRecipe.explanation}
                </p>
              </div>

              {/* Tips */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Pro Tips
                </h3>
                <ul className="space-y-2">
                  {selectedRecipe.tips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <Zap className="h-4 w-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;