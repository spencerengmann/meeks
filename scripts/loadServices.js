
async function loadServices() {
    const response = await fetch('data/services.json');
    const services = await response.json();
    return services;
  }
  
  
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
  
  
  function filterServices(services, query) {
    query = query.toLowerCase();
    return services.filter(service =>
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    );
  }
  
  
  function searchHandler(event, services) {
    event.preventDefault();
    const searchInput = document.querySelector('.search input');
    const query = searchInput.value.trim();
  
    if (query) {
      const filteredServices = filterServices(services, query);
      renderServices(filteredServices);
    } else {
      renderServices(services); 
    }
  }
  
  
  async function init() {
    const services = await loadServices();
  
    
    renderServices(services);
  
    
    const searchForm = document.querySelector('.search');
    searchForm.addEventListener('submit', event => searchHandler(event, services));
  }
  
  
  init();
  