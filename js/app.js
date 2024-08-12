$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  // Get hotel data
  const hotel = hotelData[hotelId];

  if (hotel) {
    // Update the hotel name
    $("#hotel-name").text(`${hotel.name} GUEST DIRECTORY`);
    $("#hotel-name-link").text(hotel.name);
    $(".background-container").css(
      "background-image",
      `url(${hotel.backgroundImage})`
    );

    $("#whatsapp-link").attr("href", `https://wa.me/${hotel.whatsappNumber}`);

    // Update the links to include the hotel ID
    $("#welcome-link").attr("href", `welcome.html?hotel=${hotelId}`);
    $("#food-drinks-link").attr("href", `food-drinks.html?hotel=${hotelId}`);
    $("#rooms-amenities-link").attr(
      "href",
      `hotel-rooms-amenities.html?hotel=${hotelId}`
    );
    $("#attractions-link").attr(
      "href",
      `nearby-attractions.html?hotel=${hotelId}`
    );
    $("#rules-safety-link").attr(
      "href",
      `house-rules-safety.html?hotel=${hotelId}`
    );
    $("#review-link").attr("href", `${hotel.reviewLink}`);
  } else {
    // Handle case where hotel data is not found
    $("#hotel-name").text("Hotel Guest Directory");
    alert("Hotel data not found");
  }
});
