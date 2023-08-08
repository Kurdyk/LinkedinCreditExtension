const possible_authors = ["Alexandre", "Julien", "Matthieu", "Thomas"];

const profile_map : Map<string, string> = new Map([
    // ["Alexandre", "https://www.linkedin.com/in/alexandre-roux-9b1b0b1a3/"],
    // ["Julien", "https://www.linkedin.com/in/julien-roux-9b1b0b1a3/"],
    // ["Matthieu", "https://www.linkedin.com/in/louis-kurdyk-a64034240"],
    // ["Thomas", "https://www.linkedin.com/in/thomas-gicquel/"]
]);

const content_sections = document.getElementsByClassName("post-content");

// For each author section, get the first paragraph, find the authors name add the linkedin iframe
for (let i = 0; i < content_sections.length; i++) {
    const authors_section = content_sections[i].getElementsByTagName("p")[0];
    const author_names = authors_section.innerText.split(" ").filter((name) => possible_authors.includes(name));
    author_names.forEach((name) => {
        // dispay an iframe with the linkedin profile
        const iframe = document.createElement("iframe");
        iframe.src = profile_map.get(name)!;
        iframe.width = "100%";
        iframe.sandbox.add();
        iframe.height = "100%";
        iframe.style.border = "none";
        authors_section.appendChild(iframe);
    });

}