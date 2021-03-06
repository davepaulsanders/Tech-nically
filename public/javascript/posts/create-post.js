const postTitle = document.querySelector(".post-title");
const postText = document.querySelector(".post-text");
const postSubmit = document.querySelector(".post-submit");
const errorText = document.querySelector('.error')
// Create a new post from dashboard
const handlePostSubmit = async (event) => {
  event.preventDefault();
  
  const title = postTitle.value.trim();
  const text = postText.value.trim();

  if (title.length === 0 || text.length === 0) {
    errorText.textContent = "Fill out all fields!"
    return
  }
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      text: text,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  }
};

postSubmit.addEventListener("click", handlePostSubmit);
