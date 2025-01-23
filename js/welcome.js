$(document).ready(function () {
  // Extract hotel identifier from URL
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  // Get hotel data
  const hotel = hotelData[hotelId];

  if (hotel) {
    // Update the welcome message
    $("#hotel-welcome-message").html(hotel.welcomeMessage);
    $(".background-container").css(
      "background-image",
      `url(${hotel.backgroundImage})`
    );
    if (hotel.name === "MONT AUX SOURCES") {
      $("#image-icon").attr("src", "images/phone-icon.png");
      $("#whatsapp-link").attr("href", `tel:${hotel.whatsappNumber}`);
    } else {
      $("#image-icon").attr("src", "images/whatsapp-icon.png");
      $("#whatsapp-link").attr("href", `https://wa.me/${hotel.whatsappNumber}`);
    }

    // Update the map image
    const estateMap = $("#hotel-map");
    estateMap.attr("src", hotel.mapImage);

    // Update the back link
    $("#back-link").attr("href", `index.html?hotel=${hotelId}`);
  } else {
    // Handle case where hotel data is not found
    $("#hotel-welcome-message").text("Welcome to our hotel!");
    alert("Hotel data not found");
  }
});

// JavaScript for Popup Functionality
function showPopup() {
  const mapImageSrc = $("#hotel-map").attr("src");
  $("#popupImage").attr("src", mapImageSrc);
  $("#imagePopup").css("display", "flex");
}

function closePopup() {
  $("#imagePopup").css("display", "none");
}
