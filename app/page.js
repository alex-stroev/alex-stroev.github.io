import Image from "next/image";
import styles from "./page.module.scss";
import Hello from "./__components/Hello";
import PortfolioList from "./__components/PortfolioList";

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
                    src="/face/03fwe.jpg"
                    width={400}
                    height={400}
                    alt={""}
                    priority={true}
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
                    <b>Мое резюме на&nbsp;hh.ru</b>
                </a>
            </p>
            <p>
                <a
                    href="https://shorturl.at/nuPUY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <b>Telegram для связи</b>
                </a>
            </p>

            <h2>Основные навыки</h2>
            <ul>
                <li>
                    <strong>HTML</strong>&nbsp;&mdash; от&nbsp;таблиц до&nbsp;
                    <strong>flex/grid</strong>. Верстаю кроссбраузерно и&nbsp;
                    <strong>адаптивно</strong> (fluid). Стремлюсь обеспечивать
                    доступность контента на&nbsp;всех вьюпортах, не&nbsp;только
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
                    документации&nbsp;&mdash; intermediate.
                </li>
            </ul>

            <p>
                Аккуратен, внимателен к&nbsp;мелочам, умею расставлять
                приоритеты, неконфликтен.
            </p>

            <PortfolioList />
        </div>
    );
}
