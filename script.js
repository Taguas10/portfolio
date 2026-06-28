document.addEventListener("DOMContentLoaded", () => {
    // Array representing your technical competencies
    const skills = [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML5 / CSS3",
        "Git & GitHub"
    ];

    const skillContainer = document.getElementById("skill-container");

    if (skillContainer) {
    
        skills.forEach(skill => {
            const skillItem = document.createElement("div");
            skillItem.classList.add("skill-item");
            skillItem.textContent = skill;
            skillContainer.appendChild(skillItem);
        });
    }
});
