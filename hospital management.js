// =========================
// HOSPITAL WEBSITE JAVASCRIPT
// File: hospital-script.js
// =========================

// -------------------------
// DATA
// -------------------------

const departments = [
  {
    name: "Cardiology",
    description: "Advanced heart care and cardiovascular treatments.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Neurology",
    description: "Specialized brain and nervous system treatments.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Orthopedics",
    description: "Bone, joint, and muscle care services.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Pediatrics",
    description: "Healthcare services for infants and children.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Emergency",
    description: "24/7 emergency and trauma care services.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Radiology",
    description: "Advanced imaging and diagnostic services.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop",
  },
];

const services = [
  {
    title: "Emergency Care",
    description: "Immediate emergency response and treatment.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Laboratory",
    description: "Advanced diagnostic and pathology services.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Surgery",
    description: "Modern operation theatres with expert surgeons.",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop",
  },
];

const doctors = [
  {
    name: "Dr. John Smith",
    specialization: "Cardiologist",
    department: "Cardiology",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr. Emily Watson",
    specialization: "Neurologist",
    department: "Neurology",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dr. Michael Brown",
    specialization: "Orthopedic Surgeon",
    department: "Orthopedics",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Sarah Johnson",
    specialization: "Pediatrician",
    department: "Pediatrics",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const testimonials = [
  {
    name: "David Miller",
    review: "Excellent healthcare service and very supportive doctors.",
    rating: 5,
  },
  {
    name: "Sophia Wilson",
    review: "The hospital staff were very kind and professional.",
    rating: 5,
  },
];

const faqData = [
  {
    question: "Do you provide 24/7 emergency services?",
    answer: "Yes, our emergency department is available 24 hours a day.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book through the appointment form available on the website.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance providers.",
  },
];

const galleryImages = [
  {
    title: "Main Building",
    subtitle: "Modern Infrastructure",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ICU Ward",
    subtitle: "Advanced Care Unit",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Operation Theatre",
    subtitle: "Modern Surgical Equipment",
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1200&auto=format&fit=crop",
  },
];

// -------------------------
// MOBILE MENU
// -------------------------

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// -------------------------
// SMOOTH SCROLL
// -------------------------

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

// -------------------------
// RENDER DEPARTMENTS
// -------------------------

const departmentsGrid = document.getElementById("departmentsGrid");

departments.forEach((department) => {
  departmentsGrid.innerHTML += `
    <div class="card">
      <div class="card-image">
        <img src="${department.image}" alt="${department.name}">
      </div>

      <div class="card-header">
        <h3 class="card-title">${department.name}</h3>
        <p class="card-description">${department.description}</p>
      </div>
    </div>
  `;
});

// -------------------------
// RENDER SERVICES
// -------------------------

const servicesGrid = document.getElementById("servicesGrid");

services.forEach((service) => {
  servicesGrid.innerHTML += `
    <div class="card">
      <div class="card-image">
        <img src="${service.image}" alt="${service.title}">
      </div>

      <div class="card-header">
        <h3 class="card-title">${service.title}</h3>
        <p class="card-description">${service.description}</p>
      </div>
    </div>
  `;
});

// -------------------------
// FILTER BUTTONS
// -------------------------

const filterButtons = document.getElementById("filterButtons");

const categories = [
  "All",
  ...new Set(doctors.map((doctor) => doctor.department)),
];

categories.forEach((category) => {
  filterButtons.innerHTML += `
    <button class="filter-btn ${category === "All" ? "active" : ""}">
      ${category}
    </button>
  `;
});

// -------------------------
// RENDER DOCTORS
// -------------------------

const doctorsGrid = document.getElementById("doctorsGrid");

function renderDoctors(data) {
  doctorsGrid.innerHTML = "";

  data.forEach((doctor) => {
    doctorsGrid.innerHTML += `
      <div class="card">
        <div class="card-image">
          <img src="${doctor.image}" alt="${doctor.name}">
        </div>

        <div class="card-header">
          <h3 class="card-title">${doctor.name}</h3>
          <p class="card-description">${doctor.specialization}</p>
          <p><strong>${doctor.department}</strong></p>
        </div>
      </div>
    `;
  });
}

renderDoctors(doctors);

// -------------------------
// FILTER FUNCTIONALITY
// -------------------------

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    const category = button.innerText;

    if (category === "All") {
      renderDoctors(doctors);
    } else {
      const filtered = doctors.filter(
        (doctor) => doctor.department === category,
      );

      renderDoctors(filtered);
    }
  });
});

// -------------------------
// SEARCH DOCTORS
// -------------------------

const doctorSearch = document.getElementById("doctorSearch");

doctorSearch.addEventListener("input", () => {
  const value = doctorSearch.value.toLowerCase();

  const filtered = doctors.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(value) ||
      doctor.specialization.toLowerCase().includes(value)
    );
  });

  renderDoctors(filtered);
});

// -------------------------
// APPOINTMENT FORM
// -------------------------

const appointmentForm = document.getElementById("appointmentForm");
const departmentSelect = document.getElementById("department");
const doctorSelect = document.getElementById("doctor");

// Load departments in dropdown
departments.forEach((department) => {
  departmentSelect.innerHTML += `
    <option value="${department.name}">
      ${department.name}
    </option>
  `;
});

// Load doctors based on department
departmentSelect.addEventListener("change", () => {
  const selectedDepartment = departmentSelect.value;

  doctorSelect.innerHTML = `<option value="">Select doctor</option>`;

  const filteredDoctors = doctors.filter(
    (doctor) => doctor.department === selectedDepartment,
  );

  filteredDoctors.forEach((doctor) => {
    doctorSelect.innerHTML += `
      <option value="${doctor.name}">
        ${doctor.name}
      </option>
    `;
  });
});

// Submit Appointment
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  showToast(
    "Appointment Booked!",
    "Your appointment request has been submitted successfully.",
  );

  appointmentForm.reset();
});

// -------------------------
// TESTIMONIALS
// -------------------------

const testimonialsGrid = document.getElementById("testimonialsGrid");

testimonials.forEach((testimonial) => {
  let stars = "";

  for (let i = 0; i < testimonial.rating; i++) {
    stars += "⭐";
  }

  testimonialsGrid.innerHTML += `
    <div class="testimonial-card">

      <div class="rating">
        ${stars}
      </div>

      <p class="testimonial-text">
        "${testimonial.review}"
      </p>

      <div class="testimonial-author">
        <strong>${testimonial.name}</strong>
      </div>

    </div>
  `;
});

// -------------------------
// FAQ
// -------------------------

const faqContainer = document.getElementById("faqContainer");

faqData.forEach((faq) => {
  faqContainer.innerHTML += `
    <div class="faq-item">

      <button class="faq-question">
        ${faq.question}

        <svg class="faq-icon" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div class="faq-answer">
        <p class="faq-answer-text">${faq.answer}</p>
      </div>

    </div>
  `;
});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

// -------------------------
// GALLERY
// -------------------------

const galleryGrid = document.getElementById("galleryGrid");

galleryImages.forEach((item) => {
  galleryGrid.innerHTML += `
    <div class="gallery-item">

      <img src="${item.image}" alt="${item.title}">

      <div class="gallery-overlay">
        <div class="gallery-info">
          <h4>${item.title}</h4>
          <p>${item.subtitle}</p>
        </div>
      </div>

    </div>
  `;
});

// -------------------------
// CONTACT FORM
// -------------------------

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  showToast("Message Sent!", "Thank you for contacting us.");

  contactForm.reset();
});

// -------------------------
// TOAST
// -------------------------

function showToast(title, message) {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");

  toastTitle.innerText = title;
  toastMessage.innerText = message;

  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// -------------------------
// NAVBAR SHADOW ON SCROLL
// -------------------------

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
  }
});
