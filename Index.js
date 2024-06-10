document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const likeBtn = post.querySelector('.btn-like');
    const dislikeBtn = post.querySelector('.btn-dislike');
    const likeCountSpan = post.querySelector('.like-count');
    const dislikeCountSpan = post.querySelector('.dislike-count');
    const commentBox = post.querySelector('.comment-box textarea');
    const postBtn = post.querySelector('.comment-box button');
    const commentsContainer = post.querySelector('.comments');

    let likeCount = 0;
    let dislikeCount = 0;

    likeBtn.addEventListener('click', () => {
      likeCount++;
      likeCountSpan.textContent = likeCount;
    });

    dislikeBtn.addEventListener('click', () => {
      dislikeCount++;
      dislikeCountSpan.textContent = dislikeCount;
    });

    postBtn.addEventListener('click', () => {
      const comment = commentBox.value.trim();
      if (comment !== '') {
        addComment(commentsContainer, comment);
        commentBox.value = ''; // Clear the comment input
      }
    });

    const addComment = (container, comment) => {
      const div = document.createElement('div');
      div.classList.add('comment', 'mt-2');
      div.textContent = comment;
      container.appendChild(div);
    };
  });
});
        
