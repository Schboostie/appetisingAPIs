document.addEventListener('DOMContentLoaded', function() {
  fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user data.');
      }
      return response.json();
    })
    .then(data => {
      // Create and append elements to display user details
      const userDetailsDiv = document.getElementById('user-details');

      const nameHeading = document.createElement('h2');
      nameHeading.textContent = data.name;
      userDetailsDiv.appendChild(nameHeading);

      const emailParagraph = document.createElement('p');
      emailParagraph.textContent = 'Email: ' + data.email;
      userDetailsDiv.appendChild(emailParagraph);

      const phoneParagraph = document.createElement('p');
      phoneParagraph.textContent = 'Phone: ' + data.phone;
      userDetailsDiv.appendChild(phoneParagraph);

      // Add more elements as needed for other user details

    })
    .catch(error => {
      console.log(error);
    });
});
