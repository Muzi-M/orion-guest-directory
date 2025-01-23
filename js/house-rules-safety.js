$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const hotelId = urlParams.get("hotel");

  const hotel = hotelData[hotelId];

  if (hotel) {
    $("#back-link").attr("href", `index.html?hotel=${hotelId}`);
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

    $("#house-rules-safety").html(hotel.houseRulesAndSafety);
  } else {
    alert("Hotel data not found");
  }
});
