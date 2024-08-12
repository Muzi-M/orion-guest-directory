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

    function renderMenu(section, items) {
      const sectionElement = $(`#${section}`);
      sectionElement.empty();
      if (items.length === 0) {
        sectionElement.append(
          '<li class="list-group-item">No items available</li>'
        );
      } else {
        items.forEach((item) => {
          sectionElement.append(
            `<li class="list-group-item d-flex justify-content-between align-items-center">${item.name} <span class="badge badge-primary badge-pill">${item.price}</span></li>`
          );
        });
      }
    }

    renderMenu("salads", hotel.menu.salads);
    renderMenu("starters", hotel.menu.starters);
    renderMenu("grills", hotel.menu.grills);
    renderMenu("burgers", hotel.menu.burgers);
    renderMenu("light-meals", hotel.menu.lightMeals);
    renderMenu("platters", hotel.menu.platters);
    renderMenu("desserts", hotel.menu.desserts);

    renderMenu("wines", hotel.menu.beverages.wines);
    renderMenu("beers", hotel.menu.beverages.beers);
    renderMenu("ciders", hotel.menu.beverages.ciders);
    renderMenu("spirits", hotel.menu.beverages.spirits);
    renderMenu("softDrinks", hotel.menu.beverages.softDrinks);
  } else {
    alert("Hotel data not found");
  }
});
