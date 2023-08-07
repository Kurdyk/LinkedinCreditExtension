const possible_authors = ["Alexandre", "Julien", "Matthieu", "Thomas"];

const profile_map : Map<string, string> = new Map([
    // ["Alexandre", "https://www.linkedin.com/in/alexandre-roux-9b1b0b1a3/"],
    // ["Julien", "https://www.linkedin.com/in/julien-roux-9b1b0b1a3/"],
    // ["Matthieu", "https://www.linkedin.com/in/matthieu-roux-9b1b0b1a3/"],
    ["Thomas", "https://www.linkedin.com/in/thomas-gicquel/"]
]);

const content_sections = document.getElementsByClassName("post-content");

// For each author section, get the first paragraph, find the authors name add the linkedin card
for (let i = 0; i < content_sections.length; i++) {
    const authors_section = content_sections[i].getElementsByTagName("p")[0];
    const author_names = authors_section.innerText.split(" ").filter((name) => possible_authors.includes(name));
    author_names.forEach((name) => {
        const linkedin_card = document.createElement("a");
        linkedin_card.href = profile_map.get(name)!;
        linkedin_card.target = "_blank";
        linkedin_card.rel = "noopener noreferrer";
        linkedin_card.className = "linkedin-card";
        linkedin_card.innerText = name;
        authors_section.appendChild(linkedin_card);
    });
}