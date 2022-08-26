class EnglishClass {
  constructor(id, phrasalVerb, verb, sentense, thema) {
    this.id = id;
    this.phrasalVerb = phrasalVerb;
    this.verb = verb;
    this.sentense = sentense;
    this.thema = thema;
    this.translate = false;
  }
}

//ǝ, ʌ, ʊ, ɛ, ɜ, ɑ, ʃ, ð, æ
const CardsList = [
  new EnglishClass(
    2,
    {
      eng: "to brush up(on) sth",
      uk: "відновити знання, навички",
      trans: "[brʌʃ ʌp(ɑ:n)]",
    },
    { eng: "to renew", trans: "[ri`nu:]" },
    {
      eng: "I need to brush up on my shooting skills",
      uk: "Мені потрібно відновити свої навички стрільби",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),

  new EnglishClass(
    5,
    {
      eng: "to cool of",
      uk: "охолоджувати; заспокоюватися",
      trans: "[ku:l ɑ:f]",
    },
    {
      eng: "to soothe; to become(cool)",
      trans: "[su:ð; bi`kʌm (ku:l)]",
    },
    {
      eng: "Please, Sir, let the coffee cool off a bit before drinking",
      uk: "Сер, будь ласка, дайте каві трохи охолонути, перш ніж питимете",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),

  new EnglishClass(
    10,
    {
      eng: "to fool around",
      uk: "пустувати(з можливістю небажаних наслідків)",
      trans: "[fu:l ǝ`raʊnd]",
    },
    { eng: "to waste(time)", trans: "[weist (taim)]" },
    {
      eng: "Stop fooling around - this is serious!",
      uk: "Перестань пустувати - це серйозно!",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    12,
    {
      eng: "to get on",
      uk: "ciдати на автобус, потяг, літак",
      trans: "[get ɑ:n]",
    },
    { eng: "to enter", trans: "[`entǝr]" },
    {
      eng: "I think we got on the wrong bus",
      uk: "Думаю, ми сіли не на той автобус",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    13,
    {
      eng: "to grow out of",
      uk: "перерости/ стати надто дорослим для одягу, заняття",
      trans: "[groʊ aʊt ǝv]",
    },
    { eng: "to become(mature)", trans: "[bi`kʌm(mǝ`tʊr)]" },
    {
      eng: "He still bites his nails, but hopefully he`ll grow out of it",
      uk: "Він все ще кусає нігті, він переросте це",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    16,
    {
      eng: "to lie down",
      uk: "прилягати, щоб відпочити",
      trans: "[lai daʊn]",
    },
    { eng: "to rest", trans: "[rest]" },
    {
      eng: "He lay down on the bed in order to relax",
      uk: "Він приліг на ліжко, щоб розслабитись",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    17,
    {
      eng: "to liten up",
      uk: "заспокоюватися, розслаблятися, ставати меньш серйозним",
      trans: "[laitǝn ʌp]",
    },
    { eng: "to ease", trans: "[i:z]" },
    {
      eng: "Lighten up! That was just a joke!",
      uk: "Розслабся! Це був просто жарт!",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    20,
    {
      eng: "to look after",
      uk: "наглядати, дбати про когось",
      trans: "[lʊk 'æftǝr]",
    },
    { eng: "to baby-sit", trans: "[`beibi sit]" },
    {
      eng: "Could you look after the children while I`m out?",
      uk: "Чи можете ви наглянути за дітьми, поки мене не буде?",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    21,
    {
      eng: "to look around",
      uk: "оглядати(місцевість)",
      trans: "[lʊk ǝ`raʊnd]",
    },
    { eng: "to observe", trans: "[ǝb`zɜ:rv]" },
    {
      eng: "She spent the afternoon looking around the town",
      uk: "Вона провела післяобідній час, оглядаючи місто",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
  new EnglishClass(
    24,
    {
      eng: "to pass down",
      uk: "оглядати(місцевість)",
      trans: "[pæs daʊn]",
    },
    { eng: "to transfer", trans: "[`trænsfɜ:r]" },
    {
      eng: "The legends of this tribe have been passed down from father to son over the centuries",
      uk: "Вона провела післяобідній час, оглядаючи місто",
    },
    { eng: "Leisure", uk: "Дозвілля" }
  ),
];

export default CardsList;
