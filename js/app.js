$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  // Get hotel data
  const hotel = hotelData[hotelId];

  if (hotel) {
    // Update the hotel name
    $("#hotel-name").text(hotel.name);
    $("#hotel-name-link").text(hotel.name);
    $(".background-container").css(
      "background-image",
      `url(${hotel.backgroundImage})`
    );

    if (hotel.name === "MONT AUX SOURCES") {
      $("#rooms-amenities-link").text("ROOMS & ACTIVITY CENTRE");
    } else {
      $("#rooms-amenities-link").text("ROOMS & AMENITIES");
      $("#image-icon").attr("src", "images/whatsapp-icon.png");
      $("#whatsapp-link").attr("href", `https://wa.me/${hotel.whatsappNumber}`);
    }

    $("#hotel-logo").attr("src", hotel.logo);
    $("#hotel-page-link").attr("href", hotel.hotelPage);

    // Update the links to include the hotel ID
    $("#welcome-link").attr("href", `welcome.html?hotel=${hotelId}`);
    $("#food-drinks-link").attr("href", `#`);
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

// Global variables for image gallery
let currentImageIndex = 0;
let currentMenuImages = [];

// Function to show the menu popup
function showMenuPopup() {
  const hotelId = new URLSearchParams(window.location.search).get("hotel");
  const hotel = hotelData[hotelId];

  if (hotel && hotel.menuImages && hotel.menuImages.length > 0) {
    currentMenuImages = hotel.menuImages;
    currentImageIndex = 0;
    showPopupImage();
    $("#imagePopup").css("display", "flex");
  } else {
    alert("No menu images available for this hotel.");
  }
}

// Function to show the current image in the popup
function showPopupImage() {
  $("#popupImage").attr("src", currentMenuImages[currentImageIndex]);
}

// Close the popup
function closePopup() {
  $("#imagePopup").css("display", "none");
}

// Show the previous image
function showPrev(event) {
  event.stopPropagation();
  currentImageIndex =
    (currentImageIndex - 1 + currentMenuImages.length) %
    currentMenuImages.length;
  showPopupImage();
}

// Show the next image
function showNext(event) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % currentMenuImages.length;
  showPopupImage();
}
