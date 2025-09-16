document.addEventListener('DOMContentLoaded', function() {
    // Copy IP functionality
    const copyButton = document.getElementById('copyIP');
    const ipText = document.querySelector('.ip').textContent;
    const notification = document.getElementById('notification');
    
    copyButton.addEventListener('click', function() {
        // Create a temporary input element to copy the text
        const tempInput = document.createElement('input');
        tempInput.value = ipText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Show notification
        notification.classList.add('show');
        
        // Hide notification after 3 seconds
        setTimeout(function() {
            notification.classList.remove('show');
        }, 3000);
    });
    
    // Add some interactive animations
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.querySelector('i').style.transform = 'scale(1.2)';
            this.querySelector('i').style.transition = 'transform 0.3s ease';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.querySelector('i').style.transform = 'scale(1)';
        });
    });
});