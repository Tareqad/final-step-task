const properties = [
    { img: "./assest/img/properties/seaside serenity villa.png", title: "Seaside Serenity Villa", description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...", bedrooms: "4-Bedroom", bathrooms: "3-Bathroom", type: "Villa", price: "$550,000" },
    { img: "./assest/img/properties/Metropolitan Haven.png", title: "Metropolitan Haven", description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...", bedrooms: "2-Bedroom", bathrooms: "2-Bathroom", type: "Villa", price: "$550,000" },
    { img: "./assest/img/properties/Rustic Retreat Cottage.png", title: "Rustic Retreat Cottage", description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...", bedrooms: "3-Bedroom", bathrooms: "3-Bathroom", type: "Villa", price: "$550,000" },
    { img: "./assest/img/properties/seaside serenity villa.png", title: "Seaside Serenity Villa", description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...", bedrooms: "4-Bedroom", bathrooms: "3-Bathroom", type: "Villa", price: "$550,000" },
    { img: "./assest/img/properties/Metropolitan Haven.png", title: "Metropolitan Haven", description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...", bedrooms: "2-Bedroom", bathrooms: "2-Bathroom", type: "Villa", price: "$550,000" },
    { img: "./assest/img/properties/Rustic Retreat Cottage.png", title: "Rustic Retreat Cottage", description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...", bedrooms: "3-Bedroom", bathrooms: "3-Bathroom", type: "Villa", price: "$550,000" }
  ];
  
  const testimonials = [
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Emelie Thomson.png", name: "Emelie Thomson", title: "Efficient and Reliable", testimony:"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.", location: "USA, Florida" },
    { img: "./assest/img/customers/John Mans.png", name: "John Mans", title: "Trusted Advisors", testimony:"The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!", location: "USA, Nevada" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" },
    { img: "./assest/img/customers/Wade Warren.png", name: "Wade Warren", title: "Exceptional Service!", testimony:"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!", location: "USA, California" }
  ];
  
  const faqs = [
    { question: "How do I search for properties on Estatein?", answer: "Use our search bar to filter by location, price, and features." },
    { question: "What documents do I need to sell my property through Estatein?", answer: "Find out about the necessary documentation for listing your property with us." },
    { question: "How can I contact an Estatein agent?", answer: "Discover the different ways you can get in touch with our experienced agents." },
    { question: "How do I search for properties on Estatein?", answer: "Use our search bar to filter by location, price, and features." },
    { question: "Can I list my own property?", answer: "Yes, you can list your property via the 'Add Property' section." },
    { question: "Are your listings verified?", answer: "All listings go through a verification process to ensure authenticity." },
    { question: "How do I search for properties on Estatein?", answer: "Use our search bar to filter by location, price, and features." },
    { question: "Can I list my own property?", answer: "Yes, you can list your property via the 'Add Property' section." },
    { question: "Are your listings verified?", answer: "All listings go through a verification process to ensure authenticity." }
  ];
  
  function getCardsPerPage() {
    return window.innerWidth >= 992 ? 3 : 1;
  }
  
  function renderSection(dataArray, containerSelector, templateFunction, currentPage) {
    const container = document.querySelector(containerSelector);
    const cardsPerPage = getCardsPerPage();
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const sliced = dataArray.slice(start, end);
  
    container.style.opacity = '0';
    setTimeout(() => {
      container.innerHTML = '';
      sliced.forEach(item => container.innerHTML += templateFunction(item));
      container.style.opacity = '1';
    }, 300);
  }
  
  function propertyTemplate(property) {
    return `
      <div class="featured-Properties-card col-md-4 col-sm-6 d-flex flex-wrap">
        <div class="featured-Properties-card-details p-lg-3">
          <img src="${property.img}" alt="${property.title}" class="img-fluid" />
          <h3 class="pt-lg-4">${property.title}</h3>
          <p>${property.description} <a class="text-white text-decoration-underline" href="#">Read More</a></p>
          <div class="featured-properties-icons d-flex justify-content-between">
            <div class="featured-Properties-card-icon rounded-pill p-lg-2"><i class="fa-solid fa-bed"></i><span class="ps-lg-2">${property.bedrooms}</span></div>
            <div class="featured-Properties-card-icon rounded-pill p-lg-2"><i class="fa-solid fa-bath"></i><span class="ps-lg-2">${property.bathrooms}</span></div>
            <div class="featured-Properties-card-icon rounded-pill p-lg-2"><i class="fa-solid fa-building"></i><span class="ps-lg-2">${property.type}</span></div>
          </div>
          <div class="featured-Properties-card-price d-flex justify-content-between align-items-center pt-2">
            <div><p class="mb-0">Price</p><span>${property.price}</span></div>
            <a href="#" class="View-Property-Details-btn px-4">View Property Details</a>
          </div>
        </div>
      </div>`;
  }
  
  function testimonialTemplate(testimonial) {
    return `
      <div class="testimonial-card col-md-4 col-sm-6 p-lg-5">
        <div class="d-flex justify-content-start pb-lg-4">${'<span class="star"><i class="fas fa-star"></i></span>'.repeat(5)}</div>
        <h3 class="mb-3">${testimonial.title}</h3>
        <p class="mb-4">${testimonial.testimony}</p>
        <div class="d-flex align-items-center">
          <img src="${testimonial.img}" alt="${testimonial.name}" class="rounded-circle m-1" width="60" height="60">
          <div class="reviewer-info ms-lg-3 mt-lg-3">
            <h3>${testimonial.name}</h3>
            <address>${testimonial.location}</address>
          </div>
        </div>
      </div>`;
  }
  
  function faqTemplate(faq) {
    return `
      <div class="frequently-asked-card mt-5">
        <div class="frequently-asked-card-details p-lg-5">
          <h3 class="card-title">${faq.question}</h3>
          <p class="card-text mt-4 mb-5">${faq.answer}</p>
          <a href="#" class="faq-btn">Read More</a>
        </div>
      </div>`;
  }
  
  function setupPagination(dataArray, containerSelector, templateFunction, pageState, prevBtnId, nextBtnId) {
    const update = () => {
      const totalPages = Math.ceil(dataArray.length / getCardsPerPage());
      pageState.currentPage = Math.max(1, Math.min(pageState.currentPage, totalPages));
      renderSection(dataArray, containerSelector, templateFunction, pageState.currentPage);
  
      // Update current page and total pages
      const prevButton = document.getElementById(prevBtnId);
      const nextButton = document.getElementById(nextBtnId);
      const container = prevButton.closest('.pagination');
  
      if (container) {
        const currentPageSpan = container.querySelector('.current-page');
        const totalPagesSpan = container.querySelector('.total-pages');
  
        if (currentPageSpan) currentPageSpan.textContent = String(pageState.currentPage).padStart(2, '0');
        if (totalPagesSpan) totalPagesSpan.textContent = String(totalPages).padStart(2, '0');
      }
    };
  
     
  
    document.getElementById(prevBtnId).addEventListener('click', () => {
      if (pageState.currentPage > 1) {
        pageState.currentPage--;
        update();
      }
    });
  
    document.getElementById(nextBtnId).addEventListener('click', () => {
      const totalPages = Math.ceil(dataArray.length / getCardsPerPage());
      if (pageState.currentPage < totalPages) {
        pageState.currentPage++;
        update();
      }
    });
  
    window.addEventListener('resize', update);
    update();
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    setupPagination(properties, '.featured-Properties-cards', propertyTemplate, { currentPage: 1 }, 'prev-page', 'next-page');
    setupPagination(testimonials, '.testimonials-cards', testimonialTemplate, { currentPage: 1 }, 'testimonial-prev', 'testimonial-next');
    setupPagination(faqs, '.frequently-asked-cards', faqTemplate, { currentPage: 1 }, 'faq-prev', 'faq-next');
    document.getElementById('closeBannerBtn').addEventListener('click', function() {
      document.querySelector('.banner').remove();
    });
  });
  