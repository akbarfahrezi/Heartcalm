/* HEARTCALM landing page — interactions */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after choosing a section.
  const navLinks = document.querySelectorAll("#navLinks .nav-link");
  const navCollapseElement = document.getElementById("navLinks");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navCollapseElement.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navCollapseElement).hide();
      }
    });
  });

  // Smooth scrolling accounts for the fixed navigation bar.
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      const navHeight = document.getElementById("mainNav")?.offsetHeight || 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;
      window.scrollTo({ top: targetTop, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(null, "", targetId);
    });
  });

  // Newsletter validation: confirmation is a UI demo, no data is transmitted.
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");
  const feedback = document.getElementById("emailFeedback");
  const modalElement = document.getElementById("newsletterModal");
  const confirmationModal = bootstrap.Modal.getOrCreateInstance(modalElement);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    emailInput.classList.remove("is-invalid", "is-valid");
    feedback.classList.remove("invalid-feedback-custom");

    if (!emailPattern.test(email)) {
      emailInput.classList.add("is-invalid");
      feedback.textContent = "Masukkan alamat email dengan format yang benar, misalnya nama@email.com.";
      feedback.classList.add("invalid-feedback-custom");
      emailInput.setAttribute("aria-invalid", "true");
      emailInput.focus();
      return;
    }

    emailInput.classList.add("is-valid");
    emailInput.setAttribute("aria-invalid", "false");
    feedback.textContent = "Format email valid. Konfirmasi ini hanya simulasi dan tidak menyimpan email.";
    document.getElementById("modalMessage").textContent =
      `Format email ${email} valid. Ini hanya simulasi konfirmasi—email tidak dikirim atau disimpan ke database.`;
    confirmationModal.show();
  });

  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("is-invalid")) {
      emailInput.classList.remove("is-invalid");
      feedback.classList.remove("invalid-feedback-custom");
      feedback.textContent = "Demo antarmuka: email tidak dikirim atau disimpan ke database.";
      emailInput.removeAttribute("aria-invalid");
    }
  });
});
