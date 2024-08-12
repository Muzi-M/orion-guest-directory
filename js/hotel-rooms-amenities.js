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
    $("#whatsapp-link").attr("href", `https://wa.me/${hotel.whatsappNumber}`);

    $("#hotel-rooms-amenities").html(hotel.roomsAndAmenities);
  } else {
    alert("Hotel data not found");
  }
});
