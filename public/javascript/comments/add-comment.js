const submitComment = document.querySelector(".comment-submit");
const text = document.querySelector(".comment-text");
const errorText = document.querySelector('.error')
// Request to add a comment
const handleCommentSubmit = async (event) => {
  event.preventDefault();
  const text = document.querySelector(".add-comment").value.trim();
  // getting post id from the window url
  const postId =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  if (text.length === 0) {
    errorText.textContent = "Please fill out field!"
    return
  }
  const response = await fetch("/api/comments", {
    method: "post",
    body: JSON.stringify({
      text: text,
      post: postId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(window.location.href);
  }
};

submitComment.addEventListener("click", handleCommentSubmit);
