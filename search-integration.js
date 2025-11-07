document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input")

  // Maldito documento del demonio >:(
  const performSearch = window.performSearch

  function displaySearchResults(results, searchInput) {
    let resultsContainer = document.getElementById("search-results-container")
    if (resultsContainer) {
      resultsContainer.remove()
    }

    if (results.length === 0) {
      return
    }

    resultsContainer = document.createElement("div")
    resultsContainer.id = "search-results-container"
    resultsContainer.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ddd;
      border-top: none;
      border-radius: 0 0 8px 8px;
      max-height: 300px;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `

    results.forEach((result) => {
      const resultItem = document.createElement("div")
      resultItem.style.cssText = `
        padding: 12px 16px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color 0.2s;
      `

      resultItem.innerHTML = `
        <span style="flex: 1; color: #333;">${result.title}</span>
        <span style="color: #0066cc; font-size: 12px; font-weight: bold; margin-left: 10px;">${result.page.toUpperCase()}</span>
      `

      resultItem.addEventListener("click", () => {
        window.location.href = result.url
      })

      resultItem.addEventListener("mouseenter", () => {
        resultItem.style.backgroundColor = "#f5f5f5"
      })

      resultItem.addEventListener("mouseleave", () => {
        resultItem.style.backgroundColor = "transparent"
      })

      resultsContainer.appendChild(resultItem)
    })

    const searchContainer = searchInput.closest(".search-container")
    if (searchContainer) {
      searchContainer.style.position = "relative"
      searchContainer.appendChild(resultsContainer)
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value

      if (query.trim().length > 0) {
        const results = performSearch(query)
        displaySearchResults(results, searchInput)
      } else {
        const existingResults = document.getElementById("search-results-container")
        if (existingResults) {
          existingResults.remove()
        }
      }
    })

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container")) {
        const existingResults = document.getElementById("search-results-container")
        if (existingResults) {
          existingResults.remove()
        }
      }
    })
  }
})
