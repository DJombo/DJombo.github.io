document.getElementById('feedback-link').addEventListener('click', function(event) {
  event.preventDefault();
  var newWindow = window.open("", "Feedback Form", "width=500,height=600");
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <body>
      <h1>Feedback Form</h1>
      <form id="feedback-form">
        Name: <input type="text" id="name" required><br>
        Email: <input type="email" id="email" required><br>
        Feedback: <textarea id="feedback" required></textarea><br>
        <input type="submit" value="Submit">
      </form>
      <p id="result"></p>
      <script>
     document.getElementById('feedback-form').addEventListener('submit', function(event) {
          event.preventDefault();
          var name = document.getElementById('name').value;
          var email = document.getElementById('email').value;
          var feedback = document.getElementById('feedback').value;
          var userData = {
            name: name,
            email: email,
            feedback: feedback
          };
          document.getElementById('result').innerText = 'Thank you for your feedback, ' + userData.name + '! i will get back to you at ' + userData.email + ' and probably murder you.';
        });
      </script>
    </body>
    </html>
  `);
});
