import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import countriesList from '../templates/countriesList.hbs';
import countriesCard from '../templates/countriesCard.hbs';
import { input, container } from './refs';
import { manyMatchesErrorMsg, notFoundErrorMsg } from './pnotify';

const reset = () => {
    container.innerHTML = '';
};

const render = markup => {
    container.insertAdjacentHTML('beforeend', markup);
};

const markupRender = data => {
    const countries = data.length;
    const countriesCardMarkup = countriesCard(data);
    const countriesListMarkup = countriesList(data);

    if (countries > 10) {
        return manyMatchesErrorMsg();
    }

    else if (countries >= 2 && countries <= 10) {
        render(countriesListMarkup);
    }

    else  render(countriesCardMarkup); 
};

const onInputPress = () => {
    reset();

    const countryName = input.value;

    if (!countryName) {
        return
    };

    fetchCountries(countryName).then(markupRender).catch(notFoundErrorMsg);

};

input.addEventListener('input', debounce(onInputPress, 500));