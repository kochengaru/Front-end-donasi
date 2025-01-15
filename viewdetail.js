
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".zoom-in");
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Optional: Stop observing once visible
        }
      });
    }, observerOptions);

    elements.forEach((el, index) => {
      setTimeout(() => {
        observer.observe(el);
      }, index * 200); // Delay each element by 200ms
    });
  });
