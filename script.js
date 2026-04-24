document.addEventListener('DOMContentLoaded', () => {
    // List of your actual skills
    const skills = [
        'PHP & MySQL', 
        'HTML5 & CSS3', 
        'JavaScript (ES6)', 
        'C Programming', 
        'C# Basics',
        'Git & GitHub',
        'Web Security',
        'Database Design'
    ];

    const skillContainer = document.getElementById('skill-container');

    // Create the skill badges dynamically
    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.innerText = skill;
        skillContainer.appendChild(item);
    });
});