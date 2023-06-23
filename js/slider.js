const isSliderVisible = true;
const oAnnouncements = {
    EN: [
        { value: '$NORA Token Pre-Sale Amount', link: 'buy-nora.html' },
    ],
    FR: [
        { value: 'Montant de la prévente du jeton $NORA', link: 'buy-nora-french.html' },
    ],
    DE: [
        { value: 'Vorverkaufsbetrag für $NORA-Token', link: 'buy-nora-german.html' },
    ],
    ES: [
        { value: 'Cantidad de preventa del token de $NORA', link: 'buy-nora-spaish.html' },
    ],
    IT: [
        { value: 'Importo di prevendita del token $NORA', link: 'buy-nora-italian.html' },
    ],
    PT: [
        { value: 'Valor de pré-venda do token $NORA', link: 'buy-nora-portuguese.html' },
    ],
    NL: [
        { value: '$ NORA Token Pre-Sale Bedrag', link: 'buy-nora-dutch.html' },
    ],
    TK: [
        { value: '$NORA Token Ön Satış Tutarı', link: 'buy-nora-turkish.html' },
    ],
    RU: [
        { value: 'Предпродажная сумма токена $NORA', link: 'buy-nora-russian.html' },
    ],
    RO: [
        { value: 'Suma de pre-vânzare $ NORA Token', link: 'buy-nora-romanian.html' },
    ],
    ZH: [
        { value: '$NORA 代币预售金额', link: 'buy-nora-chinese.html' },
    ],
    KO: [
        { value: '$NORA 토큰 사전 판매 금액', link: 'buy-nora-korean.html' },
    ],
    PL: [
        { value: 'Kwota przedsprzedaży tokena NORA $', link: 'buy-nora-polish.html' },
    ],
    JA: [
        { value: '$NORA トークンのプレセール額', link: 'buy-nora-japanese.html' },
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