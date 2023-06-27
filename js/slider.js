const isSliderVisible = true;
const oAnnouncements = {
    EN: [
        { value: '$NORA Token Pre-Sales on July 12, 2023.', link: 'buy-nora.html' },
    ],
    FR: [
        { value: 'Préventes de jetons $NORA le 12 juillet 2023', link: 'buy-nora-french.html' },
    ],
    DE: [
        { value: '$NORA-Token-Vorverkäufe am 12. Juli 2023', link: 'buy-nora-german.html' },
    ],
    ES: [
        { value: 'Preventa de tokens $NORA el 12 de julio de 2023', link: 'buy-nora-spanish.html' },
    ],
    IT: [
        { value: 'Prevendita del gettone NORA il 12 luglio 2023', link: 'buy-nora-italian.html' },
    ],
    PT: [
        { value: 'Pré-venda do Token $NORA em 12 de julho de 2023', link: 'buy-nora-portuguese.html' },
    ],
    NL: [
        { value: '$NORA Token voorverkoop op 12 juli 2023', link: 'buy-nora-dutch.html' },
    ],
    TK: [
        { value: '$NORA Token Ön Satışı 12 Temmuz 2023\'te', link: 'buy-nora-turkish.html' },
    ],
    RU: [
        { value: 'Предварительная продажа токенов $NORA 12 июля 2023 года', link: 'buy-nora-russian.html' },
    ],
    RO: [
        { value: '$NORA Token Pre-vânzare pe 12 iulie 2023', link: 'buy-nora-romanian.html' },
    ],
    ZH: [
        { value: '2023年7月12日，$NORA代币预售', link: 'buy-nora-chinese.html' },
    ],
    KO: [
        { value: '2023년 7월 12일 $NORA 토큰 프리세일', link: 'buy-nora-korean.html' },
    ],
    PL: [
        { value: 'Przedsprzedaż tokena NORA w dniu 12 lipca 2023 r', link: 'buy-nora-polish.html' },
    ],
    JA: [
        { value: '2023年7月12日に$NORAトークン先行販売', link: 'buy-nora-japanese.html' },
    ],
}
const country = document.getElementById('navbarDropdown')
const data = oAnnouncements[country.textContent];
const list = document.getElementById(`announcement-list-${country.textContent}`);
if (list) {
    data.forEach(obj => {
        const listItem = document.createElement("a");
        listItem.textContent = obj.value;
        listItem.href = obj.link;
        list.appendChild(listItem);
    });
}
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
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
});