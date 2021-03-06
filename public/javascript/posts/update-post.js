const saveButton = document.querySelector(".save");
const errorText = document.querySelector('.error-text')

// update post text
const handleUpdatePost = async (event) => {
  event.preventDefault();
  const text = document.querySelector(".post-content").value;
  // getting id from window url
  const id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  
  if (text.length === 0) {
    errorText.classList.remove('d-none')
    errorText.classList.add = "d-block"
    errorText.textContent = "Please fill out field!"
    return
  }
  const response = await fetch(`/api/posts/${id}`, {
    method: "put",
    body: JSON.stringify({
      text,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace('/dashboard')
  }
};

saveButton.addEventListener("click", handleUpdatePost);
