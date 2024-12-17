# Hijri Date Converter

A package to convert Gregorian dates to Hijri dates.

## Installation (NPM)

```
npm install hijri-date-converter
```

## Usage

```js
import { toHijri } from "hijri-date-converter";

const now = new Date();

toHijri(now); // { year: 1444, month: 11, day: 1 }
toHijri(new Date(2023, 4, 21)); // { year: 1444, month: 11, day: 1 }
toHijri([2023, 5, 21]); // { year: 1444, month: 11, day: 1 }
```

## Contributing

If you encounter any issues or have suggestions, please submit them via issues or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/alwalxed/hijri-date-converter/blob/main/LICENSE) file for details.
