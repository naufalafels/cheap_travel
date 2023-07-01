# airport-iata-codes

Search airport related data by iata code 


![npm](https://img.shields.io/npm/v/airport-iata-codes?style=plastic)
![npm](https://img.shields.io/npm/l/airport-iata-codes?color=002350?style=plastic)
![npm](https://img.shields.io/bundlephobia/minzip/airport-iata-codes/1.0.1?style=plastic)
![npm](https://img.shields.io/npm/dt/airport-iata-codes?style=plastic)


## Install it via npm

```shell
npm i airport-iata-codes
```

## Require the Module

```shell
const allData = require('airport-iata-codes')
```

## To use

```shell
const data = allData(); // All Data
const data = allData('ZVJ'); // Filter by iata code
const data = allData('zvj'); // Filter by iata code

console.log(data);

```

## Output

```shell
[
  {
    iata_code: 'ZVJ',
    time_zone_id: 'Asia/Dubai',
    name: 'EK Bus Station Airport',
    city_code: 'AUH',
    country_id: 'AE',
    location: 'POINT (124.432972 54.651138)',
    elevation: 62,
    url: '',
    icao: '',
    city: 'Abu Dhabi',
    county: 'United Arab Emirates',
    municipality: 'Abu Dhabi,Dubai',
    id: 9766
  }
]


## Parameters 

## License
The MIT License (MIT)

Copyright (c)2022 arifkhan-silicornya

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.