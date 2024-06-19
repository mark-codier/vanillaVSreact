import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Компоненты',
    description:
      'Основной блок пользовательского интерфейса — создание пользовательского интерфейса путем объединения нескольких компонентов.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Возвращает (потенциально динамический) код HTML, чтобы определить фактическую разметку, которая будет отображаться.',
  },
  {
    image: propsImg,
    title: 'Параметры(Props)',
    description:
      'Сделайте компоненты настраиваемыми (и, следовательно, повторно используемыми), передавая им входные данные.',
  },
  {
    image: stateImg,
    title: 'Состояние(State)',
    description:
      'Данные, управляемые React, которые при изменении приводят к повторному рендерингу компонента и обновлению пользовательского интерфейса.',
  },
];