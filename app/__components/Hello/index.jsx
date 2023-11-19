"use client";
import { useState, useLayoutEffect } from "react";

const Hello = () => {
    const [hello, setHello] = useState("Здравствуйте");

    useLayoutEffect(() => {
        const hours = new Date().getHours();
        switch (true) {
            case hours < 6:
                setHello("Доброй ночи");
                break;
            case hours < 12:
                setHello("Доброе утро");
                break;
            case hours < 18:
                setHello("Добрый день");
                break;
            case hours <= 23:
                setHello("Добрый вечер");
                break;
            default:
                setHello("Здравствуйте");
        }
    }, []);

    //  SSR
    // let hello;
    // switch (true) {
    //     case hours < 6:
    //         hello = "Доброй ночи";
    //         break;
    //     case hours < 12:
    //         hello = "Доброе утро";
    //         break;
    //     case hours < 18:
    //         hello = "Добрый день";
    //         break;
    //     case hours <= 23:
    //         hello = "Добрый вечер";
    //         break;
    //     default:
    //         hello = "Здравствуйте";
    // }
    return <>{hello}.</>;
};
export default Hello;
