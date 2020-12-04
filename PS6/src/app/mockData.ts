// import { Country } from './country';
// import { CountryData } from './countryData';
//
export const countryDataMock: {
  Slug: string;
  Country: string;
  ISO2: string;
}[] = [
  {
    Country: 'Denmark',
    ISO2: 'DK',
    Slug: 'denmark',
  },
  {
    Country: 'Korea (North)',
    ISO2: 'KP',
    Slug: 'korea-north',
  },
  {
    Country: 'Tuvalu',
    ISO2: 'TV',
    Slug: 'tuvalu',
  },
  {
    Country: 'Cuba',
    ISO2: 'CU',
    Slug: 'cuba',
  }
];

export const countriesDataMock: {} = {
  'https://api.covid19api.com/country/denmark/status/confirmed': [{
    Cases: 18,
    City: '',
    CityCode: '',
    Country: 'Denmark',
    CountryCode: 'DK',
    Date: '2020-12-03T00:00:00Z',
    Lat: '71.71',
    Lon: '-42.6',
    Province: 'Greenland',
    Status: 'confirmed',
  }],
  'https://api.covid19api.com/country/cuba/status/confirmed': [{
    Country: 'Cuba',
    CountryCode: 'CU',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '21.52',
    Lon: '-77.78',
    Cases: 8531,
    Status: 'confirmed',
    Date: '2020-12-03T00:00:00Z'
  }],
  'https://api.covid19api.com/country/tuvalu/status/confirmed': [
    // No data for tuvalu
  ],
  'https://api.covid19api.com/country/korea-north/status/confirmed': [
    // No data for north korea
  ],
};


// https://api.covid19api.com/country/korea-north/status/confirmed
