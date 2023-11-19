// "use client";
const Hello = () => {
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
  return <>{time} {hello}.</>;
};
export default Hello;
