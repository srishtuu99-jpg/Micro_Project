const courses = [
  {
    id: 1,
    title: 'Full-Stack Web Development Bootcamp',
    category: 'Web Development',
    level: 'Beginner',
    price: 89,
    originalPrice: 149,
    rating: 4.9,
    students: 12840,
    duration: '12 weeks',
    instructor: 'Sophia Rivera',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    badge: 'Bestseller',
    description: 'Build modern web apps from scratch with React, Node, and databases.',
    learningPoints: ['React and Next.js', 'REST APIs and authentication', 'Deployment and performance'],
    curriculum: ['Introduction to full-stack development', 'Frontend architecture', 'Backend with Node.js', 'Real-world project build'],
    requirements: ['Basic HTML/CSS knowledge', 'Computer with internet access'],
    instructorBio: 'Sophia has shipped products for startups and Fortune 500 teams.',
    reviews: [{ name: 'Liam', text: 'Excellent structure and pacing.' }],
    faqs: [{ q: 'Can I learn at my own pace?', a: 'Yes, all lessons are available on demand.' }],
    lessons: [
      { title: 'Welcome & setup', duration: '8 min' },
      { title: 'Building your first UI', duration: '12 min' },
      { title: 'Connecting APIs', duration: '10 min' }
    ]
  },
  {
    id: 2,
    title: 'Data Science Essentials',
    category: 'Data Science',
    level: 'Intermediate',
    price: 69,
    originalPrice: 129,
    rating: 4.7,
    students: 9860,
    duration: '8 weeks',
    instructor: 'Marcus Lee',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular',
    description: 'Learn Python, analytics, and machine learning basics with real datasets.',
    learningPoints: ['Python for data analysis', 'Statistics and visualization', 'Model evaluation'],
    curriculum: ['Python fundamentals', 'Data cleaning', 'Visualization with Pandas', 'Intro to ML'],
    requirements: ['Basic programming knowledge'],
    instructorBio: 'Marcus is a senior data scientist working with global analytics teams.',
    reviews: [{ name: 'Nina', text: 'Loved the hands-on examples.' }],
    faqs: [{ q: 'Do I need Python experience?', a: 'A little helps, but the course starts from basics.' }],
    lessons: [
      { title: 'Python basics', duration: '15 min' },
      { title: 'Data wrangling', duration: '14 min' },
      { title: 'Visual storytelling', duration: '11 min' }
    ]
  },
  {
    id: 3,
    title: 'AI & Machine Learning Masterclass',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    price: 129,
    originalPrice: 199,
    rating: 4.8,
    students: 7420,
    duration: '16 weeks',
    instructor: 'Ava Thompson',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    badge: 'New',
    description: 'Master modern AI workflows and production-ready machine learning pipelines.',
    learningPoints: ['Deep learning fundamentals', 'Model deployment', 'Prompt engineering'],
    curriculum: ['Neural networks', 'Training pipelines', 'Model serving', 'MLOps overview'],
    requirements: ['Python familiarity', 'Linear algebra basics'],
    instructorBio: 'Ava has led ML projects across healthcare and fintech.',
    reviews: [{ name: 'Sam', text: 'The practical projects were amazing.' }],
    faqs: [{ q: 'Is the course project-based?', a: 'Yes, every module includes practical exercises.' }],
    lessons: [
      { title: 'Foundations of AI', duration: '9 min' },
      { title: 'Training models', duration: '16 min' },
      { title: 'Production deployment', duration: '13 min' }
    ]
  },
  {
    id: 4,
    title: 'Cyber Security Fundamentals',
    category: 'Cyber Security',
    level: 'Beginner',
    price: 59,
    originalPrice: 109,
    rating: 4.6,
    students: 6640,
    duration: '6 weeks',
    instructor: 'Noah Bennett',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    badge: 'Hot',
    description: 'Learn how to defend systems, analyze threats, and secure modern networks.',
    learningPoints: ['Threat modeling', 'Network security basics', 'Incident response'],
    curriculum: ['Security mindset', 'Authentication', 'Encryption', 'Best practices'],
    requirements: ['No prior experience needed'],
    instructorBio: 'Noah works as a security consultant for SaaS teams.',
    reviews: [{ name: 'Jules', text: 'Clear and beginner friendly.' }],
    faqs: [{ q: 'Will I receive support?', a: 'Yes, the learning community is active and responsive.' }],
    lessons: [
      { title: 'Threat landscape', duration: '10 min' },
      { title: 'Security tools', duration: '12 min' },
      { title: 'From breach to defense', duration: '8 min' }
    ]
  },
  {
    id: 5,
    title: 'UI/UX Design System Mastery',
    category: 'UI/UX Design',
    level: 'Intermediate',
    price: 79,
    originalPrice: 139,
    rating: 4.9,
    students: 5421,
    duration: '10 weeks',
    instructor: 'Emma Cruz',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80',
    badge: 'Trending',
    description: 'Create polished, user-centered design systems with scalable workflows.',
    learningPoints: ['Wireframing and prototyping', 'Accessibility', 'Design systems'],
    curriculum: ['Research', 'Information architecture', 'Design systems', 'Prototype validation'],
    requirements: ['Figma or equivalent'],
    instructorBio: 'Emma has worked on design systems for global consumer brands.',
    reviews: [{ name: 'Tao', text: 'The design critiques were incredibly helpful.' }],
    faqs: [{ q: 'Are exercises included?', a: 'Yes, each section includes practical projects.' }],
    lessons: [
      { title: 'Design principles', duration: '9 min' },
      { title: 'Building components', duration: '15 min' },
      { title: 'Prototype testing', duration: '10 min' }
    ]
  },
  {
    id: 6,
    title: 'Product Management for Growth',
    category: 'Business',
    level: 'Intermediate',
    price: 74,
    originalPrice: 129,
    rating: 4.5,
    students: 4102,
    duration: '7 weeks',
    instructor: 'Daniel Brooks',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    badge: 'Top Rated',
    description: 'Develop product strategy, roadmaps, and execution skills for growth teams.',
    learningPoints: ['Roadmaps', 'Stakeholder alignment', 'Success metrics'],
    curriculum: ['Product strategy', 'Execution planning', 'Analytics', 'Leadership'],
    requirements: ['Some product experience helpful'],
    instructorBio: 'Daniel leads growth initiatives at a venture-backed company.',
    reviews: [{ name: 'Rina', text: 'This course gave me actionable frameworks.' }],
    faqs: [{ q: 'Is it suitable for beginners?', a: 'It is best for early professionals and managers.' }],
    lessons: [
      { title: 'Strategy essentials', duration: '11 min' },
      { title: 'Roadmapping', duration: '12 min' },
      { title: 'Outcomes tracking', duration: '9 min' }
    ]
  },
  {
    id: 7,
    title: 'Social Media Growth Marketing',
    category: 'Marketing',
    level: 'Beginner',
    price: 49,
    originalPrice: 99,
    rating: 4.7,
    students: 7320,
    duration: '5 weeks',
    instructor: 'Riley Khan',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80',
    badge: 'Starter',
    description: 'Learn content strategy, audience growth, and conversion-focused campaigns.',
    learningPoints: ['Content calendars', 'Campaign analytics', 'Paid social strategy'],
    curriculum: ['Brand storytelling', 'Content planning', 'Growth experiments', 'Reporting'],
    requirements: ['No prior experience needed'],
    instructorBio: 'Riley runs social campaigns for education and SaaS brands.',
    reviews: [{ name: 'Jesse', text: 'I launched my first campaign immediately.' }],
    faqs: [{ q: 'Can I use this for my business?', a: 'Yes, the strategies are practical for personal and company brands.' }],
    lessons: [
      { title: 'Audience targeting', duration: '8 min' },
      { title: 'Content pillars', duration: '10 min' },
      { title: 'Analytics', duration: '9 min' }
    ]
  }
];

const state = {
  wishlist: JSON.parse(localStorage.getItem('eduv_wishlist') || '[]'),
  cart: JSON.parse(localStorage.getItem('eduv_cart') || '[]'),
  selectedCourseId: Number(localStorage.getItem('eduv_selected_course') || courses[0].id),
  currentLesson: 0
};

const saveState = () => {
  localStorage.setItem('eduv_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('eduv_cart', JSON.stringify(state.cart));
  localStorage.setItem('eduv_selected_course', state.selectedCourseId);
};

const getCourseById = (id) => courses.find((course) => course.id === Number(id));

const formatPrice = (value) => `$${value}`;

const renderCourseCards = (container, coursesToRender) => {
  if (!container) return;
  if (!coursesToRender.length) {
    container.innerHTML = '<div class="glass-card detail-block">No courses match your filters yet.</div>';
    return;
  }

  container.innerHTML = coursesToRender.map((course) => {
    const isWishlisted = state.wishlist.includes(course.id);
    const isInCart = state.cart.includes(course.id);
    return `
      <article class="course-card glass-card">
        <img src="${course.image}" alt="${course.title}" />
        <div class="course-card-header">
          <span class="badge">${course.badge}</span>
          <button class="wishlist-btn" data-action="wishlist" data-id="${course.id}" aria-label="Wishlist">
            <i class="${isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </button>
        </div>
        <h3>${course.title}</h3>
        <p class="course-meta">${course.instructor} • ${course.duration}</p>
        <div class="course-meta">
          <span><i class="fa-solid fa-star"></i> ${course.rating}</span>
          <span><i class="fa-solid fa-users"></i> ${course.students.toLocaleString()}</span>
        </div>
        <div class="price-row">
          <div>
            <span class="price">${formatPrice(course.price)}</span>
            <span class="original-price">${formatPrice(course.originalPrice)}</span>
          </div>
          <span class="badge">${course.category}</span>
        </div>
        <div class="card-actions">
          <a class="btn btn-primary" href="course-details.html" data-action="view" data-id="${course.id}">View Details</a>
          <button class="btn btn-secondary" data-action="cart" data-id="${course.id}">${isInCart ? 'Added' : 'Add to Cart'}</button>
        </div>
      </article>
    `;
  }).join('');
};

const renderFeaturedCourses = () => {
  const container = document.getElementById('featured-courses');
  if (!container) return;
  renderCourseCards(container, courses.slice(0, 4));
};

const setupCatalog = () => {
  const container = document.getElementById('courses-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const priceFilter = document.getElementById('price-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const sortFilter = document.getElementById('sort-filter');

  if (!container) return;

  const uniqueCategories = [...new Set(courses.map((course) => course.category))];
  if (categoryFilter) {
    categoryFilter.innerHTML = '<option value="all">All</option>' + uniqueCategories.map((category) => `<option value="${category}">${category}</option>`).join('');
  }

  const applyFilters = () => {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const category = categoryFilter?.value || 'all';
    const level = levelFilter?.value || 'all';
    const price = priceFilter?.value || 'all';
    const rating = Number(ratingFilter?.value || '0');
    const sort = sortFilter?.value || 'featured';

    let filtered = courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm) || course.instructor.toLowerCase().includes(searchTerm);
      const matchesCategory = category === 'all' || course.category === category;
      const matchesLevel = level === 'all' || course.level === level;
      const matchesPrice = price === 'all' || (price === 'free' ? course.price === 0 : course.price > 0);
      const matchesRating = !rating || course.rating >= rating;
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating;
    });

    if (sort === 'price-low') filtered = filtered.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') filtered = filtered.sort((a, b) => b.price - a.price);
    if (sort === 'rating') filtered = filtered.sort((a, b) => b.rating - a.rating);

    renderCourseCards(container, filtered);
  };

  [searchInput, categoryFilter, levelFilter, priceFilter, ratingFilter, sortFilter].forEach((el) => {
    el?.addEventListener('input', applyFilters);
    el?.addEventListener('change', applyFilters);
  });

  applyFilters();
};

const renderCourseDetails = () => {
  const hero = document.getElementById('course-hero-content');
  const purchaseCard = document.getElementById('purchase-card');
  const learningPoints = document.getElementById('learning-points');
  const curriculum = document.getElementById('curriculum');
  const requirements = document.getElementById('requirements');
  const instructorProfile = document.getElementById('instructor-profile');
  const reviews = document.getElementById('reviews');
  const courseFaq = document.getElementById('course-faq');

  if (!hero && !purchaseCard) return;
  const course = getCourseById(state.selectedCourseId);
  if (!course) return;

  if (hero) {
    hero.innerHTML = `
      <div class="eyebrow">${course.category}</div>
      <h1>${course.title}</h1>
      <p>${course.description}</p>
      <div class="course-meta">
        <span><i class="fa-solid fa-star"></i> ${course.rating}</span>
        <span><i class="fa-solid fa-users"></i> ${course.students.toLocaleString()} students</span>
        <span><i class="fa-solid fa-clock"></i> ${course.duration}</span>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary" data-action="cart" data-id="${course.id}">${state.cart.includes(course.id) ? 'Added to Cart' : 'Add to Cart'}</button>
        <a class="btn btn-secondary" href="checkout.html">Buy Now</a>
      </div>
    `;
  }

  if (purchaseCard) {
    purchaseCard.innerHTML = `
      <h3>Buy this course</h3>
      <div class="price-row"><div class="price">${formatPrice(course.price)}</div><span class="original-price">${formatPrice(course.originalPrice)}</span></div>
      <div class="hero-actions"><a class="btn btn-primary btn-block" href="checkout.html">Buy Now</a></div>
      <ul>
        <li><span>Lifetime Access</span><strong>Included</strong></li>
        <li><span>Certificate</span><strong>Included</strong></li>
        <li><span>Mobile Access</span><strong>Included</strong></li>
        <li><span>Money Back</span><strong>30 days</strong></li>
      </ul>
    `;
  }

  if (learningPoints) {
    learningPoints.innerHTML = course.learningPoints.map((point) => `<li>${point}</li>`).join('');
  }

  if (curriculum) {
    curriculum.innerHTML = course.curriculum.map((item, index) => `
      <details class="faq-item glass-card" ${index === 0 ? 'open' : ''}>
        <summary>${item}</summary>
        <p>Lesson ${index + 1} included in this module.</p>
      </details>
    `).join('');
  }

  if (requirements) {
    requirements.innerHTML = course.requirements.map((item) => `<li>${item}</li>`).join('');
  }

  if (instructorProfile) {
    instructorProfile.innerHTML = `
      <div class="avatar-box">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" alt="Instructor" />
        <div>
          <h3>${course.instructor}</h3>
          <p>${course.instructorBio}</p>
        </div>
      </div>
    `;
  }

  if (reviews) {
    reviews.innerHTML = course.reviews.map((review) => `
      <div class="detail-block glass-card">
        <strong>${review.name}</strong>
        <p>${review.text}</p>
      </div>
    `).join('');
  }

  if (courseFaq) {
    courseFaq.innerHTML = course.faqs.map((faq) => `
      <details class="faq-item glass-card">
        <summary>${faq.q}</summary>
        <p>${faq.a}</p>
      </details>
    `).join('');
  }
};

const renderCheckout = () => {
  const container = document.getElementById('checkout-course');
  const subtotalEl = document.getElementById('subtotal');
  const discountEl = document.getElementById('discount');
  const totalEl = document.getElementById('total-price');
  const couponInput = document.getElementById('coupon-input');
  const applyCouponBtn = document.getElementById('apply-coupon');
  const checkoutForm = document.getElementById('checkout-form');
  const popup = document.getElementById('order-popup');

  if (!container) return;
  const course = getCourseById(state.selectedCourseId);
  if (!course) {
    container.innerHTML = '<p>No selected course found.</p>';
    return;
  }

  let subtotal = course.price;
  let discount = 0;
  const updateTotals = () => {
    const total = subtotal - discount;
    subtotalEl.textContent = formatPrice(subtotal);
    discountEl.textContent = formatPrice(discount);
    totalEl.textContent = formatPrice(total);
  };

  container.innerHTML = `
    <div class="course-card glass-card">
      <img src="${course.image}" alt="${course.title}" />
      <h3>${course.title}</h3>
      <p>${course.instructor}</p>
    </div>
  `;
  updateTotals();

  applyCouponBtn?.addEventListener('click', () => {
    const coupon = couponInput?.value.trim().toLowerCase();
    if (coupon === 'eduv10') {
      discount = 10;
      updateTotals();
      alert('Coupon applied!');
    } else {
      discount = 0;
      updateTotals();
      alert('Coupon not valid.');
    }
  });

  checkoutForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    popup?.classList.add('active');
    popup?.setAttribute('aria-hidden', 'false');
    localStorage.setItem('eduv_purchase', JSON.stringify({ courseId: course.id, status: 'confirmed' }));
  });

  popup?.addEventListener('click', () => {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
  });
};

const renderDashboard = () => {
  const enrolledCount = document.getElementById('enrolled-count');
  const hours = document.getElementById('learning-hours');
  const certificates = document.getElementById('certificates-earned');
  const progressPercent = document.getElementById('progress-percent');
  const myCourses = document.getElementById('my-courses');
  const playlist = document.getElementById('playlist');
  const video = document.getElementById('dashboard-video');
  const prev = document.getElementById('prev-lesson');
  const next = document.getElementById('next-lesson');
  const certificateBtn = document.getElementById('download-certificate');

  if (!myCourses && !playlist) return;
  const course = getCourseById(state.selectedCourseId);
  if (!course) return;

  enrolledCount.textContent = '3';
  hours.textContent = '18h';
  certificates.textContent = '1';
  progressPercent.textContent = '78%';

  myCourses.innerHTML = `
    <div class="course-card glass-card">
      <h3>${course.title}</h3>
      <p>${course.instructor}</p>
      <div class="progress-bar"><span style="width:78%"></span></div>
      <div class="card-actions"><button class="btn btn-primary">Continue Learning</button></div>
    </div>
  `;

  if (playlist) {
    playlist.innerHTML = course.lessons.map((lesson, index) => `
      <div class="playlist-item ${index === state.currentLesson ? 'active' : ''}" data-index="${index}">
        <strong>${lesson.title}</strong><br />
        <span>${lesson.duration}</span>
      </div>
    `).join('');
  }

  const updateLesson = () => {
    if (!playlist) return;
    const items = playlist.querySelectorAll('.playlist-item');
    items.forEach((item, index) => {
      item.classList.toggle('active', index === state.currentLesson);
    });
  };

  playlist?.addEventListener('click', (event) => {
    const item = event.target.closest('.playlist-item');
    if (!item) return;
    state.currentLesson = Number(item.dataset.index);
    updateLesson();
  });

  prev?.addEventListener('click', () => {
    state.currentLesson = Math.max(0, state.currentLesson - 1);
    updateLesson();
  });

  next?.addEventListener('click', () => {
    state.currentLesson = Math.min(course.lessons.length - 1, state.currentLesson + 1);
    updateLesson();
  });

  certificateBtn?.addEventListener('click', () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600"><rect width="100%" height="100%" fill="#fff"/><text x="450" y="180" font-size="40" text-anchor="middle" fill="#4f46e5">EduVerse Certificate</text><text x="450" y="280" font-size="28" text-anchor="middle" fill="#111827">${course.title}</text><text x="450" y="340" font-size="24" text-anchor="middle" fill="#64748b">Completed by Ava Thompson</text><text x="450" y="440" font-size="20" text-anchor="middle" fill="#64748b">Issued on ${new Date().toLocaleDateString()}</text></svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'eduv_certificate.svg';
    link.click();
  });
};

const toggleMobileMenu = () => {
  const header = document.querySelector('.site-header');
  header?.classList.toggle('open');
};

const initTestimonials = () => {
  const cards = Array.from(document.querySelectorAll('.testimonial-card'));
  if (!cards.length) return;
  let activeIndex = 0;
  const show = (index) => {
    cards.forEach((card, i) => card.classList.toggle('active', i === index));
  };
  const next = () => {
    activeIndex = (activeIndex + 1) % cards.length;
    show(activeIndex);
  };
  document.querySelector('.slider-btn.next')?.addEventListener('click', next);
  document.querySelector('.slider-btn.prev')?.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    show(activeIndex);
  });
  setInterval(next, 5000);
};

const initTheme = () => {
  const storedTheme = localStorage.getItem('eduv_theme') || 'light';
  document.body.setAttribute('data-theme', storedTheme);
  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('eduv_theme', nextTheme);
  });
};

const initScrollTop = () => {
  const button = document.querySelector('.scroll-top');
  window.addEventListener('scroll', () => {
    button?.classList.toggle('show', window.scrollY > 600);
  });
  button?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
};

const initNewsletter = () => {
  const form = document.getElementById('newsletter-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    button.textContent = 'Subscribed';
    setTimeout(() => {
      button.textContent = 'Subscribe';
      form.reset();
    }, 1800);
  });
};

const initEventDelegation = () => {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    const id = Number(button.dataset.id);
    if (action === 'wishlist') {
      state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter((item) => item !== id) : [...state.wishlist, id];
      saveState();
      renderFeaturedCourses();
      setupCatalog();
      renderCourseDetails();
    }

    if (action === 'cart') {
      state.cart = state.cart.includes(id) ? state.cart : [...state.cart, id];
      saveState();
      renderFeaturedCourses();
      setupCatalog();
      renderCourseDetails();
    }

    if (action === 'view') {
      state.selectedCourseId = id;
      saveState();
    }
  });
};

const initLoader = () => {
  const loader = document.querySelector('.page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader?.classList.add('hide'), 450);
  });
};

const initPage = () => {
  initLoader();
  initTheme();
  initTestimonials();
  initNewsletter();
  initScrollTop();
  document.querySelector('.menu-toggle')?.addEventListener('click', toggleMobileMenu);
  initEventDelegation();
  renderFeaturedCourses();
  setupCatalog();
  renderCourseDetails();
  renderCheckout();
  renderDashboard();
};

document.addEventListener('DOMContentLoaded', initPage);
