// Footer loader function
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
            // Fallback footer if loading fails
            document.getElementById('footer-placeholder').innerHTML = `
                <footer>
                    <div class="container">
                        <p>&copy; 2025 Chill To You. All rights reserved.</p>
                        <p><strong>With love and light, Chilly</strong></p>
                    </div>
                </footer>
            `;
        });
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);