import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './register.html',
    styleUrl: './register.scss'
})
export class RegisterComponent {
    name = '';
    email = '';
    password = '';
    confirmPassword = '';
    loading = false;

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit(event: Event) {
        event.preventDefault();

        if (this.password !== this.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        this.loading = true;

        this.authService.register(this.name, this.email, this.password).subscribe({
            next: () => {
                this.router.navigate(['/dashboard']);
            },
            error: (err) => {
                console.error('Registration failed', err);
                this.loading = false;
                alert('Error al registrarse. Verifique los datos e intente nuevamente.');
            }
        });
    }
}
