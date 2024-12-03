// Load the services data from the JSON file
async function loadServices() {
    const response = await fetch('data/services.json');
    const services = await response.json();
    return services;
  }
  
  // Create the HTML structure for a single service
  function serviceTemplate(service) {
    return `
      <section class="service">
        <div class="content">
        
          <h2>${service.title}</h2>
        <img src="${service.image}" alt="${service.title}" />

          <p>${service.description}</p>
        </div>
      </section>
    `;
  }
  
  // Render the services dynamically into the DOM
  function renderServices(servicesList) {
    const servicesContainer = document.querySelector('.services');
    if (servicesList.length === 0) {
      servicesContainer.innerHTML = `<p>No services found. Try a different search.</p>`;
    } else {
      servicesContainer.innerHTML = servicesList
        .map(service => serviceTemplate(service))
        .join('');
    }
  }
  
  // Filter services based on the search query
  function filterServices(services, query) {
    query = query.toLowerCase();
    return services.filter(service =>
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    );
  }
  
  // Handle search form submission
  function searchHandler(event, services) {
    event.preventDefault();
    const searchInput = document.querySelector('.search input');
    const query = searchInput.value.trim();
  
    if (query) {
      const filteredServices = filterServices(services, query);
      renderServices(filteredServices);
    } else {
      renderServices(services); // If the query is empty, show all services again
    }
  }
  
  // Initialize the page
  async function init() {
    const services = await loadServices();
  
    // Render all services initially
    renderServices(services);
  
    // Attach the search handler to the form
    const searchForm = document.querySelector('.search');
    searchForm.addEventListener('submit', event => searchHandler(event, services));
  }
  
  // Call the init function to set everything up
  init();
  