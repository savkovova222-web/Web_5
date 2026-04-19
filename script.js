document.addEventListener("DOMContentLoaded", () => {

    const userAgentInfo = navigator.userAgent;
    localStorage.setItem("userSystemInfo", userAgentInfo);
    
    const savedInfo = localStorage.getItem("userSystemInfo");
    document.getElementById("os-browser-info").textContent = savedInfo;
	
    const variantNumber = 14; 
    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(comments => {
        const container = document.getElementById("comments-container");
        comments.forEach(comment => {
          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");
          commentDiv.innerHTML = `
            <strong>Name:</strong> ${comment.name} <br>
            <strong>Email:</strong> ${comment.email} <br>
            <p>${comment.body}</p>
          `;
          container.appendChild(commentDiv);
        });
      })
      .catch(error => console.error("Error fetching comments:", error));
    const modal = document.getElementById("feedback-modal");
    const closeModalBtn = document.getElementById("close-modal");
    setTimeout(() => {
      modal.style.display = "block";
    }, 60000); 
  
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
    const body = document.body;
    const themeToggleBtn = document.getElementById("theme-toggle");

    const currentHour = new Date().getHours();
    
    if (currentHour >= 7 && currentHour < 21) {
      body.className = "light-theme";
    } else {
      body.className = "dark-theme";
    }
    themeToggleBtn.addEventListener("click", () => {
      if (body.classList.contains("light-theme")) {
        body.className = "dark-theme";
      } else {
        body.className = "light-theme";
      }
    });
  });