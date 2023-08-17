const possible_authors = ["Thomas"];

const profile_map : Map<string, string> = new Map([
    ["Thomas", "http://localhost:3000/author/thomas"],
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
        iframe.sandbox.add("allow-scripts");
        iframe.height = "100%";
        authors_section.appendChild(iframe);
    });

}