// Define the question data structure
class Question {
  constructor(title, body, username, date) {
    this.title = title;
    this.body = body;
    this.username = username;
    this.date = date;
    this.comments = [];
  }
}

// Define the comment data structure
class Comment {
  constructor(body, username, date) {
    this.body = body;
    this.username = username;
    this.date = date;
  }
}

// Get the question form and question list
const questionForm = document.getElementById('question-form');
const questionList = document.getElementById('question-list');

// Listen for form submission
questionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the form input values
  const title = '';
  const body = questionForm.elements['question-input'].value;
  const username =  questionForm.elements['username-input'].value;; // Replace with code to get username
  const date = new Date();

  // Create a new question object
  const question = new Question(title, body, username, date);

  // Add the question to the question list
  addQuestionToDOM(question);

  // Clear the form input
  questionForm.elements['question-input'].value = '';
});

// Add a question to the DOM
function addQuestionToDOM(question) {
  // Create the HTML for the question
  const questionHTML = `
    <li class="question">
    <span class="username border-b-2"> ${question.username}</span>
  
      <h3>${question.title}</h3>
      <p>${question.body}</p>
      <div class="question-meta">
        
        <span class="date">${question.date.toLocaleString()}</span>
      </div>
      <ul class="comment-list">
        <!-- Comments will be added dynamically using JavaScript -->
      </ul>
      <form class="comment-form">
      <div class ="flex">
        <label class="px-4" for="comment-input">Add a comment:</label>
        <input
            class="rounded-sm border-none bg-blue-300 bg-opacity-50 px-6 h-10 text-inherit placeholder-gray-500 shadow-lg outline-none backdrop-blur-md"
            id="comment-input" type="text" name="name" placeholder="Add a comment" />

        <div class="flex px-4 justify-center text-lg text-black">
            <button type="submit" 
                class="rounded-3xl bg-black bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Submit</button>

        </div>
        </div>

      </form>
    </li>
  `;

  // Add the question HTML to the question list
  questionList.insertAdjacentHTML('beforeend', questionHTML);

  // Get the comment form and comment list for the new question
  const commentForm = questionList.lastElementChild.querySelector('.comment-form');
  const commentList = questionList.lastElementChild.querySelector('.comment-list');

  // Listen for comment form submission
  commentForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form input values
    const body = commentForm.elements['comment-input'].value;
    const username = ''; // Replace with code to get username
    const date = new Date();

    // Create a new comment object
    const comment = new Comment(body, username, date);

    // Add the comment to the comment list
    addCommentToDOM(commentList, comment);

    // Clear the form input
    commentForm.elements['comment-input'].value = '';
  });
}

// Add a comment to the DOM
function addCommentToDOM(commentList, comment) {
  // Create the HTML for the comment
  const commentHTML = `
    <li class="comment">
      <p>${comment.body}</p>
      <div class="comment-meta">
        <span class="username">${comment.username}</span>
        <span class="date">${comment.date.toLocaleString()}</span>
      </div>
    </li>
  `;

  // Add the comment HTML to the comment list
  commentList.insertAdjacentHTML('beforeend', commentHTML);
}