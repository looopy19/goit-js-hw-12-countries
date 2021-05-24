import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { alert } from '@pnotify/core';

export const manyMatchesErrorMsg = () =>
  alert({
    type: 'notice',
    text: 'To many matches found. Please enter a more specific query!',
    delay: 3000,
    sticker: true,
    animateSpeed: 'slow',
  });

export const notFoundErrorMsg = () =>
  alert({
    type: 'error',
    text: 'This country was not found!',
    delay: 3000,
    sticker: true,
    animateSpeed: 'slow',
  });