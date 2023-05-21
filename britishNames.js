function fetchRandomUser() {
  fetch("https://www.randomuser.me/api")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to fetch user data.");
      }
      return response.json();
    })
    .then(function (data) {
      const user = data.results[0];
      console.log(user);

      // Build the profile page
      const profileContainer = document.getElementById("profile-container");

      // Create profile elements
      const profile = document.createElement("div");
      profile.className = "profile";

      const profileImage = document.createElement("img");
      profileImage.className = "profile-image";
      profileImage.src = user.picture.large;
      profileImage.alt = "Profile Picture";
      profile.appendChild(profileImage);

      const profileName = document.createElement("div");
      profileName.className = "profile-name";
      profileName.textContent = `${user.name.first} ${user.name.last}`;
      profile.appendChild(profileName);

      profileContainer.appendChild(profile);
    })
    .catch(function (error) {
      console.log(error);
    });
}

window.onload = fetchRandomUser;

