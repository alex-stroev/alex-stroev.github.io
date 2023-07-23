import Image from "next/image";
import styles from "./page.module.scss";
export const metadata = {
  title: "Александр Строев - HTML-верстальщик/Frontend-разработчик",
  description: "",
  robots: "noindex, nofollow",
};

export default function Home() {
  const time = new Date().getHours();
  let hello;

  switch (true) {
    case time < 6:
      hello = "Доброй ночи";
      break;
    case time < 12:
      hello = "Доброе утро";
      break;
    case time < 18:
      hello = "Добрый день";
      break;
    case time <= 23:
      hello = "Добрый вечер";
      break;
    default:
      hello = "Здравствуйте";
  }

  return (
    <div className={styles.kernel}>
      <p>
        {hello}. Меня зовут Александр,
        я&nbsp;HTML-верстальщик/Frontend-разработчик.
      </p>
      <p>
        В&nbsp;настоящее время ищу постоянную работу.{" "}
        <a
          href="https://hh.ru/applicant/resumes/view?resume=8afc8cbdff0016f7b70039ed1f736563726574"
          target="_blank"
          rel="noopener noreferrer"
        >
          Мое резюме на&nbsp;hh.ru
        </a>
      </p>
      <h2>Основные навыки</h2>
      <ul>
        <li>
          HTML&nbsp;&mdash; от&nbsp;таблиц до&nbsp;flex/grid. Верстаю
          кроссбраузерно и&nbsp;адаптивно (fluid). Предпочитаю BEM-naming.
        </li>
        <li>CSS&nbsp;&mdash; SCSS/LESS, CSS modules.</li>
        <li>
          JS&nbsp;&mdash; ванилька или jQuery. Также есть опыт работы
          с&nbsp;TypeScript, при необходимости быстро вспомню.
        </li>
        <li>
          React&nbsp;&mdash; верстка и&nbsp;интеграция компонентов
          на&nbsp;хуках. Элементы UI-kit, получение и&nbsp;вывод данных
          с&nbsp;REST API, React Router, Redux, React Hook Form, изучаю Next.js.
        </li>
        <li>
          CMS&nbsp;&mdash; приходилось работать с&nbsp;1C&nbsp;Bitrix,
          Wordpress.
        </li>
        <li>
          git&nbsp;&mdash; стандартный джентльменский набор&nbsp;&mdash;
          ответвиться, внести правки (от&nbsp;пары символов до&nbsp;новой фичи),
          долить мастер, сделать request, при необходимости разрулить конфликты
          и&nbsp;так далее.
        </li>
      </ul>

      <ul>
        <li>
          Работаю с&nbsp;исходниками в&nbsp;форматах PSD, Zeplin, Figma. При
          необходимости могу обойтись и&nbsp;без отрисованного макета, опираясь
          на&nbsp;общую концепцию дизайна.
        </li>
        <li>
          Имею опыт как одиночной разработки, так и&nbsp;работы в&nbsp;команде
        </li>
        <li>В&nbsp;гугле и&nbsp;на&nbsp;Stack Overflow не&nbsp;забанен.</li>
        <li>
          Английский язык на&nbsp;уровне переписки и&nbsp;чтения документации -
          intermediate.
        </li>
      </ul>

      <p>
        Аккуратен, внимателен к&nbsp;мелочам, умею расставлять приоритеты,
        неконфликтен.
      </p>
      {/* <h2>Портфолио (выборочно)</h2>
      <p>
        Со&nbsp;временем многие сайты исчезают из&nbsp;сети или проходят
        редизайн (и, соответственно, переверстку). Так что указанное портфолио
        составляет в&nbsp;лучшем случае несколько процентов от&nbsp;реального.
      </p> */}
    </div>
  );
}
