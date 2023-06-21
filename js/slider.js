const isSliderVisible = true;
const aAnnouncement = [
    `$NORA Token Pre-Sale Amount`,
    `$NORA Token Pre-Sale Comming Soon`,
    `$NORA Token Pre-Sale Amount`,
    `$NORA Token Pre-Sale Comming Soon`,
]
const list = document.getElementById("announcement-list");
aAnnouncement.forEach((value) => {
    const listItem = document.createElement("div");
    listItem.textContent = value;
    list.appendChild(listItem);
});
const annoucementsection = document.getElementById("annoucement-section");
if (isSliderVisible) {
    annoucementsection.style.display = "block";
} else {
    annoucementsection.style.display = "none";
}

$('.annoucement-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows :false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
});