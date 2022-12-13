export function fadeInContent () {
    window.onload = () => {
        document.querySelectorAll('.fade-in-content').forEach(element => {
            element.style.opacity = 1
        });
    };
};