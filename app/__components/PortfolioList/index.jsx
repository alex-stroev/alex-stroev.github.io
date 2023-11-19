"use client";
import PortfolioItem from "../PortfolioItem";
import styles from "./styles.module.scss";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";

if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
}

const PortfolioList = () => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        ScrollTrigger.batch(`.${styles.pfblock__grid} > div`, {
            interval: 0.1,
            onEnter: (batch) => {
                // batch.forEach((el) => el.classList.add("is-visible"));
                gsap.fromTo(
                    batch,
                    { y: -40, opacity: 0 },
                    {
                        autoAlpha: 1,
                        opacity: 1,
                        stagger: 0.2,
                        y: 0,
                    }
                );
            },
        });
    }, []);

    return (
        <div ref={comp}>
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
                        img="/screens/ttstars-wfc-tv.png"
                        title="Лендинг &laquo;Стань звездой Tik-Tok вместе с WFC.TV&raquo;"
                        link="https://alex-stroev.github.io/ttstars.wfc.tv/"
                        year="2021"
                    >
                        <p>
                            Лендинг сделан во&nbsp;время работы в&nbsp;Mercury
                            Media Group, 2021
                        </p>
                    </PortfolioItem>
                    <PortfolioItem
                        img="/screens/stars-wfc-tv.png"
                        title="Лендинг &laquo;Стань лицом телеканала World Fashion Channel&raquo;"
                        link="https://alex-stroev.github.io/stars.wfc.tv/"
                        year="2021"
                    >
                        <p>
                            Лендинг сделан во&nbsp;время работы в&nbsp;Mercury
                            Media Group, 2021
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
};

export default PortfolioList;
