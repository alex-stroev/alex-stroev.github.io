import Image from "next/image";
import styles from "./page.module.scss";
import PortfolioItem from "./__components/PortfolioItem";
import Hello from "./__components/Hello";

export const metadata = {
    title: "Александр Строев - HTML-верстальщик/Frontend-разработчик",
    description:
        "Александр Строев - HTML-верстальщик/Frontend-разработчик. Резюме и портфолио",
};

export default function Home() {
    return (
        <div className={styles.kernel}>
            <div className={styles.face}>
                <Image
                    src="/face/01sda.jpg"
                    width={300}
                    height={400}
                    alt={""}
                />
            </div>
            <p>
                <Hello /> Меня зовут <strong>Александр</strong>, я&nbsp;
                <strong>HTML-верстальщик/Frontend-разработчик</strong>.
            </p>
            <p>
                Наверстываю людям упущенное, спасаю технических должников
                от&nbsp;технического банкротства 😉
            </p>
            <p>
                В&nbsp;настоящее время ищу <strong>постоянную работу</strong>.
            </p>
            <p>
                Также принимаю <strong>заказы на&nbsp;верстку</strong>.
            </p>
            <p>
                <a
                    href="https://hh.ru/applicant/resumes/view?resume=8afc8cbdff0016f7b70039ed1f736563726574"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Мое резюме на&nbsp;hh.ru
                </a>
            </p>
            <p>
                <a
                    href="https://shorturl.at/nuPUY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Telegram для связи
                </a>
            </p>

            <h2>Основные навыки</h2>
            <ul>
                <li>
                    <strong>HTML</strong>&nbsp;&mdash; от&nbsp;таблиц до&nbsp;
                    <strong>flex/grid</strong>. Верстаю кроссбраузерно
                    и&nbsp;адаптивно (fluid). Стремлюсь обеспечивать доступность
                    контента на&nbsp;всех вьюпортах, не&nbsp;только
                    на&nbsp;&laquo;стандартных&raquo; 1920/1024/etc. Предпочитаю{" "}
                    <strong className="nobr">BEM-naming</strong>, пишу без
                    фреймворков (кроме тех случаев, когда они уже используются
                    в&nbsp;проекте). Есть опыт как создания сайтов с&nbsp;нуля
                    (то&nbsp;есть с&nbsp;дизайн-макета), так и&nbsp;работы над
                    &laquo;живыми&raquo; высоконагруженными проектами.
                </li>
                <li>Верстка e-mail.</li>
                <li>
                    <strong>CSS</strong>&nbsp;&mdash; <strong>SCSS/LESS</strong>
                    , <strong>CSS modules</strong>.
                </li>
                <li>
                    <strong>JS</strong>&nbsp;&mdash; <strong>Vanilla</strong>{" "}
                    (&laquo;чистый&raquo;) JS&nbsp;или <strong>jQuery</strong>,{" "}
                    <strong>TypeScript</strong>.
                </li>
                <li>
                    <strong>React</strong>&nbsp;&mdash; верстка
                    и&nbsp;интеграция компонентов на&nbsp;хуках. Создание{" "}
                    <strong>
                        элементов <span className="nobr">UI-kit</span>
                    </strong>
                    , получение и&nbsp;вывод данных с&nbsp;
                    <strong className="nobr">REST API</strong>,{" "}
                    <strong className="nobr">React Router</strong>,{" "}
                    <strong>Redux</strong>,{" "}
                    <strong className="nobr">React Hook Form</strong>, изучаю{" "}
                    <strong>Next.js</strong>.
                </li>
                <li>
                    <strong>CMS</strong>&nbsp;&mdash; приходилось работать
                    с&nbsp;
                    <strong>1C&nbsp;Bitrix</strong>, <strong>Wordpress</strong>,{" "}
                    <strong>Adobe Experience Manager</strong>.
                </li>
                <li>
                    <strong>git</strong>&nbsp;&mdash; стандартный джентльменский
                    набор&nbsp;&mdash; ответвиться, внести правки (от&nbsp;пары
                    символов до&nbsp;новой фичи), долить мастер, сделать
                    request, при необходимости разрулить конфликты и&nbsp;так
                    далее.
                </li>
            </ul>
            <ul>
                <li>
                    Работаю с&nbsp;исходниками в&nbsp;форматах{" "}
                    <strong>PSD</strong>, <strong>Zeplin</strong>,{" "}
                    <strong>Figma</strong>. При необходимости могу обойтись
                    и&nbsp;без отрисованного макета, опираясь на&nbsp;общую
                    концепцию дизайна.
                </li>
                <li>
                    Имею опыт как одиночной разработки, так и&nbsp;работы
                    в&nbsp;команде (<strong>Jetbrains&nbsp;YouTrack</strong>,{" "}
                    <strong>Jira</strong>, <strong>Trello</strong>).
                </li>
                <li>
                    В&nbsp;гугле и&nbsp;на&nbsp;Stack Overflow не&nbsp;забанен.
                    Если решение некоей задачи мне <em>пока</em>{" "}
                    не&nbsp;известно, а&nbsp;типового варианта на&nbsp;проекте
                    нет, нахожу решение самостоятельно.
                </li>
                <li>
                    Умею выдерживать баланс между автономностью
                    и&nbsp;коммуникабельностью. Не&nbsp;стесняюсь задавать
                    вопросы, но&nbsp;в&nbsp;&laquo;нянечке&raquo;
                    не&nbsp;нуждаюсь. В&nbsp;свою очередь, всегда готов прийти
                    коллеге на&nbsp;помощь.
                </li>
                <li>
                    Есть опыт координации работы небольших команд
                    (дизайн-бэк-другие фронты при наличии)
                </li>
                <li>
                    Английский язык на&nbsp;уровне переписки и&nbsp;чтения
                    документации - intermediate.
                </li>
            </ul>

            <p>
                Аккуратен, внимателен к&nbsp;мелочам, умею расставлять
                приоритеты, неконфликтен.
            </p>
            <h2>Портфолио (выборочно)</h2>
            <p>
                Со&nbsp;временем многие сайты исчезают из&nbsp;сети или проходят
                редизайн (и, соответственно, переверстку). Так что указанное
                портфолио составляет в&nbsp;лучшем случае несколько процентов
                от&nbsp;реального.
            </p>

            <div className={styles.pfblock}>
                <div className={styles.pfblock__grid}>
                    <PortfolioItem
                        img="/screens/splitconfigurator.png"
                        title="Конфигуратор коммерческой сплит-системы | Samsung для бизнеса РОССИЯ"
                        link="https://www.samsung.com/ru/business/system-air-conditioners/single-split-cac/cac-configurator/"
                        year="2023"
                    >
                        <p>
                            Встроенная область на&nbsp;сайте Samsung
                            (от&nbsp;верхнего меню до&nbsp;нижних &laquo;хлебных
                            крошек&raquo;)
                        </p>
                        <p>
                            Никаких шаблонизаторов и&nbsp;библиотек
                            не&nbsp;использовалось, даже jQuery, чистый&nbsp;JS
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/complex-equipment-program.png"
                        title="Комплексное оснащение техникой и оборудование шоурумов | Samsung для бизнеса РОССИЯ"
                        link="https://www.samsung.com/ru/business/complex-equipment-program/"
                        year="2023"
                    >
                        <p>
                            Встроенная область на сайте Samsung (от верхнего
                            меню до нижних &laquo;хлебных крошек&raquo;)
                        </p>
                        <p>Лендинг</p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/program-for-interior-designers.png"
                        title="Партнёрская программа для дизайнеров интерьеров и архитекторов | Samsung для бизнеса РОССИЯ"
                        link="https://www.samsung.com/ru/business/program-for-interior-designers/"
                        year="2023"
                    >
                        <p>
                            Встроенная область на сайте Samsung (от верхнего
                            меню до нижних &laquo;хлебных крошек&raquo;)
                        </p>
                        <p>Лендинг</p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/program-for-developers.png"
                        title="Услуги для девелоперов и застройщиков по оснащению объектов строительства | Samsung для бизнеса РОССИЯ"
                        link="https://www.samsung.com/ru/business/program-for-developers/"
                        year="2023"
                    >
                        <p>
                            Встроенная область на сайте Samsung (от верхнего
                            меню до нижних &laquo;хлебных крошек&raquo;)
                        </p>
                        <p>Лендинг</p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/samsung-armenia.png"
                        title="Samsung Армения"
                        link="https://www.samsung.com/ru/armenia/"
                        year="2023"
                    >
                        <p>
                            Встроенная область на сайте Samsung (от верхнего
                            меню до нижних &laquo;хлебных крошек&raquo;)
                        </p>
                        <p>Лендинг</p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/tolko-v-dixy.png"
                        title="Эксклюзивно в Дикси"
                        link="https://alex-stroev.github.io/dixy_next_gh/"
                        year="2021"
                    >
                        <p>
                            Первая версия лендинга &laquo;Эксклюзивно
                            в&nbsp;Дикси&raquo;. Изначально сайт сделан
                            на&nbsp;чистом React, в&nbsp;2023 году переписан
                            на&nbsp;Next.js + CSS Modules.
                        </p>
                        <p>
                            Исходники&nbsp;&mdash;{" "}
                            <a
                                href="https://github.com/alex-stroev/dixy_next_gh/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://github.com/alex-stroev/dixy_next_gh/
                            </a>
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/calligraphy-museum.png"
                        title="Музей мировой каллиграфии — лучшие образцы красивого письма в Москве"
                        link="https://www.calligraphy-museum.com/"
                        year="2016"
                    >
                        <p>Сайт музея мировой каллиграфии, 2016&nbsp;г.</p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/calligraphy-expo.png"
                        title="Международная выставка каллиграфии"
                        link="http://calligraphy-expo.com/"
                        year="2016"
                    >
                        <p>
                            Сайт международной выставки каллиграфии,
                            2016&nbsp;г.
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/fish-expo.png"
                        title="Фестиваль &laquo;Ешь рыбу&raquo;, выставка рыбной индустрии. КВЦ Сокольники, 2017&nbsp;г"
                        link="http://fish-expo.com/"
                        year="2016"
                    >
                        <p>
                            Лендинг для выставки в&nbsp;КВЦ
                            &laquo;Сокольники&raquo;, 2016&nbsp;г.
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/foodtruck-fest.png"
                        title="Фестиваль Фудтраков в Сокольниках"
                        link="https://foodtruck-fest.ru/"
                        year="2016"
                    >
                        <p>
                            Лендинг для выставки в&nbsp;КВЦ
                            &laquo;Сокольники&raquo;, 2016&nbsp;г.
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/bbq-fest.png"
                        title="Сокольники барбекю-фестиваль"
                        link="https://bbq-fest.ru/"
                        year="2016"
                    >
                        <p>
                            Лендинг для выставки в&nbsp;КВЦ
                            &laquo;Сокольники&raquo;, 2016&nbsp;г.
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/bilet-ru.png"
                        title="Дешевые авиабилеты онлайн. Поиск билетов на самолет, ЖД билеты, отели. Билет.ру"
                        link="https://www.bilet.ru/"
                        year="2004"
                    >
                        <p>
                            Дедушка-бронтозавр из&nbsp;2004&nbsp;года, эпохи
                            табличной верстки и&nbsp;абсолютного доминирования
                            IE.
                        </p>
                        <p>
                            Держу в&nbsp;портфолио из&nbsp;сентиментальных
                            соображений))
                        </p>
                    </PortfolioItem>
                </div>
            </div>
        </div>
    );
}
