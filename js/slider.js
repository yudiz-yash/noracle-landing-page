const isSliderVisible = true;
const oAnnouncements = {
    EN: [
        { value: '$NORA Token Pre-Sale News', link: 'buy-nora.html' },
    ],
    FR: [
        { value: 'Nouvelles de prévente de jetons $NORA', link: 'buy-nora-french.html' },
    ],
    DE: [
        { value: 'Vorverkaufsnachrichten für $NORA-Token', link: 'buy-nora-german.html' },
    ],
    ES: [
        { value: 'Noticias de preventa de tokens de $NORA', link: 'buy-nora-spaish.html' },
    ],
    IT: [
        { value: 'Notizie sulla prevendita del token $NORA', link: 'buy-nora-italian.html' },
    ],
    PT: [
        { value: 'Notícias de pré-venda do token $NORA', link: 'buy-nora-portuguese.html' },
    ],
    NL: [
        { value: '$NORA Token Pre-Sale Nieuws', link: 'buy-nora-dutch.html' },
    ],
    TK: [
        { value: '$NORA Token Ön Satış Haberleri', link: 'buy-nora-turkish.html' },
    ],
    RU: [
        { value: 'Новости предпродажи токенов $NORA', link: 'buy-nora-russian.html' },
    ],
    RO: [
        { value: 'Știri de pre-vânzare $ NORA Token', link: 'buy-nora-romanian.html' },
    ],
    ZH: [
        { value: '$NORA 代币预售新闻', link: 'buy-nora-chinese.html' },
    ],
    KO: [
        { value: '$NORA 토큰 사전 판매 뉴스', link: 'buy-nora-korean.html' },
    ],
    PL: [
        { value: 'Wiadomości z przedsprzedaży tokenów $NORA', link: 'buy-nora-polish.html' },
    ],
    JA: [
        { value: '$NORA トークンのプレセール ニュース', link: 'buy-nora-japanese.html' },
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