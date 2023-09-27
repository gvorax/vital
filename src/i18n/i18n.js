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
        coolerSubtitle: `O'zbekiston bo'ylab bepul .Toshkent shahrida istiqomat qiladiganlar uchun kulerni yetkazib o'rnatib beriladi Selva kulerlariga 13 oy bepul hizmati mavjud,servis markazi Toshkent shahrida`,
        shopTitle:`Shop`,
        shopSubTitle:`Selva by Vital bu nima? `,
        shopPar:`Kompaniya Vital brendi bilan hamkorlikda o’z suvlarini ishlab
        chiqaradi.`,
        shopTitle2:`Bu nima beradi ?`,
        shopPar2:`Vital kompaniyasi Xitoy va Yaponiya texnalogiysi asosida ya’ni
        inson omili aralashuvi siz o’z suvlarini ishlab chiqaradi. Ushbu
        jarayonda suv 9 bosqichda suvni tozlanib, bir marotabalik
        qadoqlarga avtomat ravishda qadoqlanadi. Bo’sh idishlarning o’zi
        ham 3 xil haroratda 15 bosqichlik tozalash konveyridan avtomat
        ravihda o’tib idishlar suv quyish bo’limlariga avtomat tarzda
        o’tkaziladi.`,
        shopBuy:`Sotib olish`,
        contactTitle:`Biz bilan bog'lanish`,
        location:`Shayxontohur, Toshkent`,

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
        coolerSubtitle: `Бесплатно по всему Узбекистану. Охладители будут доставлены и установлены для жителей Ташкента.Охладители Selva имеют 13 месяцев бесплатного обслуживания, сервисный центр находится в Ташкенте.`,
        shopTitle:`Магазин`,
        shopSubTitle:`Что такое Сельва от Витала?`,
        shopPar:`Компания производит собственную воду в сотрудничестве с брендом Vital.
        излучает`,
        shopTitle2:`Что это дает?`,
        shopPar2:`Компания Vital основана на китайской и японской технологии.
        вмешательство человека производит собственную воду. Этот
        При этом вода очищается в 9 этапов, один раз
        автоматически упаковываются в пакеты. Сами пустые контейнеры
        также автоматический с 15-ступенчатым конвейером очистки при 3 различных температурах
        контейнеры проходят по проходу и автоматически поступают на станции заправки воды
        будет проведено.`,
        shopBuy:`Покупка`,
        contactTitle:`Cвязаться с нами`,
        location:`Шайхантахурский, Ташкент`,
      },
    },
    eng:{
      translation: {
        shop: "Market",
        about: "About us",
        contact: "Contact",
        greeting: "Assalomu aleykum",
        intro_title: `My name is Nilufar, how can I help you?`,
        intro_subtitle: `You can contact us if you have any questions)`,
        aboutTitle: `Under the Selva brand, the company has been for water since 2018
        bottled water dispensers (coolers) throughout Uzbekistan
        delivering high-level service to the people of our country
        has been showing. The company is very big in a short time
        we can say that it has passed the milestones. Based on this
        company according to customers' trust and their demand
        18.9 liters of mountain water under its Selva brand in 2020
        started delivering to its customers.`,
        waterTitle: `About water supply`,
        waterSubtitle: `Delivery of Selva water to Tashkent city and its vicinity
        carried out to the regions. Delivery service is free.
        The company supplies water for 24 hours from the moment the customer orders
        delivers during the hour. The main thing is what floor the customer is from
        regardless of residence, it is provided.`,
        coolerTitle: `About courier delivery`,
        coolerSubtitle: `Free of charge throughout Uzbekistan. Coolers will be delivered and installed for residents of Tashkent. Selva coolers have 13 months of free service, the service center is in Tashkent.`,
        shopTitle:`Shop`,
        shopSubTitle:`What is Selva by Vital?`,
        shopPar:`The company produces its own water in cooperation with the Vital brand
        emits`,
        shopTitle2:`What does it give?`,
        shopPar2:`Vital company is based on Chinese and Japanese technology
        human intervention produces its own water. This
        In the process, the water is purified in 9 stages, once
        are automatically packed into packages. Empty containers themselves
        also automatic from a 15-stage cleaning conveyor at 3 different temperatures
        the containers pass through the aisle and go to the water filling stations automatically
        will be held.`,
        shopBuy:`Buy`,
        contactTitle:`Contact us`,
        location:`Shaikhontohur, Tashkent`,

      },
    }
  },
  lng: localStorage.getItem("language") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
