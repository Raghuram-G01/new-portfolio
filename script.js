// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    const typedNameElement = document.querySelector('.typed-name');
    const text = "I'm Raghuram";
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typedNameElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 125);
        } else {
            setTimeout(eraseText, 17000);
        }
    }
    
    function eraseText() {
        if (typedNameElement.textContent.length > 0) {
            typedNameElement.textContent = typedNameElement.textContent.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            i = 0;
            setTimeout(typeWriter, 500);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
});

// Resume functionality
function showResume() {
    const resumeSection = document.getElementById('resume');
    const resumeIframe = document.getElementById('resume-iframe');
    
    // Show resume section
    resumeSection.style.display = 'block';
    
    // Load PDF in iframe
    resumeIframe.src = 'Raghuram_resume_updated (1).pdf';
    resumeIframe.style.display = 'block';
    
    // Scroll to resume section
    resumeSection.scrollIntoView({ behavior: 'smooth' });
}

// Add event listener for resume button
document.addEventListener('DOMContentLoaded', function() {
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showResume();
        });
    }
});

