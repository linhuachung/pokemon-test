/* eslint-disable no-useless-escape */
const LETTER_KATAKANA = /[ァ-ヴー]+/u; // シャツ
const LETTER_HIRAGANA = /[ぁ-ゔ]+/u; // おかあさん
const LETTER_KANJI = /[一-龠]+/u; //  門 – モン
const CHARACTER_SPECIAL = /[々〆〤ヶ]+/u; // "々" (kí tự lặp lại), "〆" (kí tự kết thúc), "〤" (kí tự bổ sung cho số) và "ヶ" (kí tự đếm cho đơn vị).
const LETTER_JP_NO_SPECIAL = /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+/u;
const LETTER_JP = /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[々〆〤ヶ]+/u;
const ONLY_NUMBER = /^[0-9]*$/;
const LETTER_NUMBER_NO_SPECIAL = /^[a-zA-Z0-9_.-]*$/;
const LETTER_NUMBER_SPECIAL =
  /^[a-zA-Z0-9_.\-!@#$%^&*()+=\[\]{}|\\?\/><,:;'\"`~]*$/;
const EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const REQUIRED_LETTER_NUMBER = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
const REQUIRED_LETTER_NUMBER_SPECIAL =
  /^(?=.*?\d)(?=.*?[a-zA-Z])(?=.*?[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;

// USE IN INPUT NUMBER of antd https://codesandbox.io/s/d3wgvz?file=/demo.tsx:380-393
const FORMAT_NUMBER_AFTER_ENTER = /B(?=(d{3})+(?!d))/g;
const PARSER_NUMBER_AFTER_ENTER = /\$\s?|(,*)/g;

export {
  CHARACTER_SPECIAL,
  LETTER_HIRAGANA,
  LETTER_JP,
  LETTER_JP_NO_SPECIAL,
  LETTER_KANJI,
  LETTER_KATAKANA,
  LETTER_NUMBER_NO_SPECIAL,
  LETTER_NUMBER_SPECIAL,
  ONLY_NUMBER,
  EMAIL,
  REQUIRED_LETTER_NUMBER,
  REQUIRED_LETTER_NUMBER_SPECIAL,
  FORMAT_NUMBER_AFTER_ENTER,
  PARSER_NUMBER_AFTER_ENTER,
};
