import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        shop: "Market",
        about: "Biz haqimizda",
        contact: "Bog'lanish",
        greeting: "Assalomu aleykum",
        intro_title: `Mening ismim Nilufar sizga qanday yordam bera olaman ?`,
        intro_subtitle: `Savollaringiz bo’lsa biz bilan bog’lanishingiz mumkin)`,
        aboutTitle: `Selva brendi ostida kompaniya 2018-yildan buyon suv uchun
        mo’njallangan suv dispensori (kuller) larini O’zbekiston bo’ylab
        yetkazib berib, yurtimiz aholisi uchun yuqori darajada xizmat
        ko’rsatib kelmoqda. Kompaniya qisqa vaqt ichida juda katta
        marralarni bosib o’tdi deb aytishimiz mumkin. Bunga asos qilib
        mijozlarning ishonchi va ularning talabiga binoan kompaniya
        2020-yilda o’zining Selva brendi ostida 18,9 litirlik tog’ suvlarini
        o’z mijozlariga yetkazib berishni boshladi.`,
        waterTitle: `Suv yetkazib berish haqida`,
        waterSubtitle: ` Selva suvlarini yetkazib berish Toshkent shaxar va unga tutash
        xududlarga amalga oshiriladi. Yetkazib berish xizmati bepul.
        Mijozning buyurtma qilgan vaqtdan boshlab kompaniya suvlarni 24
        soat davomida yetkazib beradi. Asosiysi mijoz nechanchi qavatdan
        yashashidan qat’iy nazar olib chiqib berishi ta’minlanadi.`,
        coolerTitle: `Kuller yetkazib berish haqida`,
        coolerSubtitle: `Selva suvlarini yetkazib berish Toshkent shaxar va unga tutash
        xududlarga amalga oshiriladi. Yetkazib berish xizmati bepul.
        Mijozning buyurtma qilgan vaqtdan boshlab kompaniya suvlarni 24
        soat davomida yetkazib beradi. Asosiysi mijoz nechanchi qavatdan
        yashashidan qat’iy nazar olib chiqib berishi ta’minlanadi.`,
      },
    },
    rus: {
      translation: {
        shop: "Магазин",
        about: "О нас",
        contact: "Контакт",
        greeting: "Aссалому алейкум",
        intro_title: `Меня зовут Нилуфар чем я могу тебе помочь ?`,
        intro_subtitle: `Вы можете связаться с нами, если у вас возникнут вопросы )`,
        aboutTitle: `
        Под брендом Selva компания выпускает внедорожники с 2018 года.
        диспенсер для воды (куллер) по всему Узбекистану
        предоставляя высокий уровень обслуживания для жителей нашей страны
        показывает. Компания очень большая за короткий промежуток времени
        можно сказать, что он достиг вех. Основываясь на этом,
        доверие клиентов и компания по их требованию
        В 2020 году под собственным брендом Selva мы выпустим 18,9-литровый горный внедорожник
        начал доставлять своим клиентам.
        `,
        waterTitle: `О доставке воды`,
        waterSubtitle: `Поставки воды Сельва в Ташкент и прилегающие районы
        проводится в регионах. Услуга доставки бесплатная.
        С момента заказа клиента компания производит внедорожники 24
        доставка в течение часа. Главное, с какого этажа клиент
        независимо от места жительства.`,
        coolerTitle: `О доставке  Кулер`,
        coolerSubtitle: `Поставки воды Сельва в Ташкент и прилегающие районы
        проводится в регионах. Услуга доставки бесплатная.
        С момента заказа клиента компания производит внедорожники 24
        доставка в течение часа. Главное, с какого этажа клиент
        независимо от места жительства.`,
      },
    },
  },
  lng: localStorage.getItem("language") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
