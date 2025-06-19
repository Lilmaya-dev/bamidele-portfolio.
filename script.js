const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});<script>
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check saved mode on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀';
  } else {
    toggle.textContent = '🌙';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggle.textContent = '☀';
    } else {
      localStorage.setItem('theme', 'light');
      toggle.textContent = '🌙';
    }
  });
</script>