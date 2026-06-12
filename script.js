function postAd() {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let location = document.getElementById("location").value;

  let listings = document.getElementById("listings");

  listings.innerHTML += `
    <div>
      <h3>${title}</h3>
      <p>₦${price}</p>
      <p>${location}</p>
    </div>
  `;
}
