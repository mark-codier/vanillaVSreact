// Эта функция принимает объект JS в качестве аргумента
// Объект должен содержать следующие свойства
// - InitialInvestment: начальная сумма инвестиций
// - AnnualInvestment: сумма, инвестируемая каждый год.
// - expectedReturn: ожидаемая (годовая) норма прибыли
// - duration: продолжительность инвестиции (временной интервал)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // идентификатор года
      interest: interestEarnedInYear, // сумма процентов, полученных в этом году
      valueEndOfYear: investmentValue, // значение инвестиций на конец года
      annualInvestment: annualInvestment, // инвестиции добавленные в этом году
    });
  }

  return annualData;
}

// Предоставляемый браузером Intl API используется для подготовки объекта форматирования
// Этот объект предлагает метод «format()», который можно использовать для форматирования чисел как валюты
// Пример использования: formatter.format(1000) => дает «1000 долларов»
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
