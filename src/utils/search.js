// Client-side search utility
export function initSearch(posts, projects, publications) {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  const filterContent = (term) => {
    const allItems = [...posts, ...projects, ...publications];
    const searchTerm = term.toLowerCase();
    
    return allItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      (item.excerpt && item.excerpt.toLowerCase().includes(searchTerm)) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  };
  
  searchInput.addEventListener('input', (e) => {
    const results = filterContent(e.target.value);
    // Dispatch custom event with results
    window.dispatchEvent(new CustomEvent('searchResults', { detail: results }));
  });
}