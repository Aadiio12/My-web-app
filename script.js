const subcategories = {
    pharma: ['Metabolism', 'Clearance', 'Bioavailability'],
    stats: ['Regression', 'Deviation', 'Averages'],
    lang: ['English', 'German', 'Portuguese']
  };
  
  let activeCategory = null;
  let activeSubcategory = null;
  
  function showSubcategories(category, element) {
    // Highlight selected category
    document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
    element.classList.add('active');
    activeCategory = category;
  
    // Add slide animation
    const subList = document.getElementById('subList');
    subList.classList.remove('slide-panel');
    void subList.offsetWidth; // restart animation
    subList.classList.add('slide-panel');
    subList.innerHTML = '';
  
    // Populate subcategories
    subcategories[category].forEach(sub => {
      const div = document.createElement('div');
      div.className = 'subcategory';
      div.textContent = sub;
      div.onclick = () => showContent(sub, div);
      subList.appendChild(div);
    });
  
    // Reset content area
    document.getElementById('content').innerHTML = `
      <h2>${element.textContent}</h2>
      <p>Select a subcategory to view its page.</p>
    `;
  }
  
  function showContent(subcategory, element) {
    document.querySelectorAll('.subcategory').forEach(sub => sub.classList.remove('active'));
    element.classList.add('active');
    activeSubcategory = subcategory;
  
    document.getElementById('content').innerHTML = `
      <h2>${subcategory}</h2>
      <p>This is the content area for <b>${subcategory}</b>.</p>
    `;
  }
  
  /* === Theme toggle === */
  function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
  }
  
  /* === Load saved theme === */
  window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      document.getElementById('themeToggle').textContent = '☀️';
    }
  });
  
  /* === Toggle Panels === */
  function togglePanels() {
    document.body.classList.toggle('hide-panels');
    const btn = document.getElementById('togglePanels');
    const hidden = document.body.classList.contains('hide-panels');
    btn.textContent = hidden ? '➡️' : '⬅️';
  }
  