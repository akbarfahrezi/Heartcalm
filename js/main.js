// Newsletter form validation and success feedback.
document.addEventListener('DOMContentLoaded', function() {
            // Newsletter Form Validation Simulation
            const newsletterForm = document.getElementById('newsletterForm');
            const newsletterEmailInput = document.getElementById('emailInput');
            const newsletterSuccessModal = new bootstrap.Modal(document.getElementById('successModal'));

            // Regex for basic email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Prevent actual form submission

                const emailAddress = newsletterEmailInput.value.trim();

                // Validation check
                if (!emailPattern.test(emailAddress)) {
                    // Invalid
                    newsletterEmailInput.classList.add('is-invalid');
                } else {
                    // Valid
                    newsletterEmailInput.classList.remove('is-invalid');
                    newsletterEmailInput.value = ''; // Reset form
                    
                    // Show success modal
                    newsletterSuccessModal.show();
                }
            });

            // Remove validation styling when user starts typing again
            newsletterEmailInput.addEventListener('input', function() {
                if (this.classList.contains('is-invalid')) {
                    this.classList.remove('is-invalid');
                }
            });
        });
