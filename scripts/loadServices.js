document.addEventListener("DOMContentLoaded", function () {
    // Fetch the services data from the JSON file
    fetch("data/services.json")
        .then(response => response.json())
        .then(data => {
            displayServices(data);
        })
        .catch(error => console.error("Error loading services:", error));
});

// Function to display services
function displayServices(services) {
    const servicesContainer = document.querySelector(".services");

    services.forEach(service => {
        // Create a section element for each service
        const serviceSection = document.createElement("section");
        serviceSection.classList.add("services-section");

        // Create and append title
        const title = document.createElement("h2");
        title.textContent = service.title;
        serviceSection.appendChild(title);

        // Create and append image
        const img = document.createElement("img");
        img.src = service.image;
        img.alt = service.title;
        serviceSection.appendChild(img);

        // Create and append description
        const description = document.createElement("p");
        description.textContent = service.description;
        serviceSection.appendChild(description);

        // Create and append Book Now button
        const button = document.createElement("button");
        button.textContent = "Book Now";
        button.onclick = () => {
            window.location.href = "book.html";
        };
        serviceSection.appendChild(button);

        // Append the service section to the container
        servicesContainer.appendChild(serviceSection);
    });
}
