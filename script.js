let reviews = [];

function addReview() {
  let name = document.getElementById("name").value;
  let text = document.getElementById("review").value;
  let rating = document.getElementById("rating").value;

  if(name === "" || text === "") {
    alert("Please enter your name and review!");
    return;
  }

  let review = {
    name: name,
    text: text,
    rating: rating
  };

  reviews.push(review);
  displayReviews();

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("review").value = "";
}

function displayReviews() {
  let output = "";
  for (let r of reviews) {
    output += `<p><strong>${r.name}</strong> (${r.rating} ⭐)</p>
               <p>${r.text}</p><hr>`;
  }
  document.getElementById("reviews").innerHTML = output;
}
