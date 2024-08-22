document.addEventListener('DOMContentLoaded', function() {
    const commentSections = document.querySelectorAll('.comments');
    
    commentSections.forEach(section => {
        const commentForm = document.createElement('form');
        commentForm.innerHTML = `
            <label for="comment">Add a comment:</label><br>
            <textarea id="comment" name="comment"></textarea><br>
            <button type="submit">Submit</button>
        `;
        
        section.appendChild(commentForm);

        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const commentText = commentForm.querySelector('textarea').value;
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`;
            section.insertBefore(newComment, commentForm);
            commentForm.reset();
        });
    });
});
