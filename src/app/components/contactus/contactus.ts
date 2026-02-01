import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector:    'app-contact-us',
  standalone:  true,
  imports:     [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrls:   ['./contactus.css']
})
export class ContactUsComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name:    ['', [Validators.required, Validators.minLength(2)]],
      email:   ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /** Returns true if the field has been touched and is invalid */
  isInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!ctrl && ctrl.touched && ctrl.invalid;
  }

  /** Handle form submission */
  onSubmit(): void {
    // Mark all fields as touched so errors show
    this.contactForm.markAllAsTouched();

    if (this.contactForm.invalid) return;

    // ─── Replace this block with your real API call ───
    console.log('Form data:', this.contactForm.value);
    // Example: this.contactService.send(this.contactForm.value).subscribe(...)
    // ────────────────────────────────────────────────

    this.submitted = true;
    this.contactForm.reset();
  }

}
