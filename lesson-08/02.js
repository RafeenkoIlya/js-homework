/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Убираем пробелы с начала и конца строки
  str = str.trim();

  // Проверка, что строка не пустая
  if (str === "") return false;

  // Преобразуем строку в число
  const num = Number(str);

  // Проверяем, что результат не NaN
  return !isNaN(num);
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
