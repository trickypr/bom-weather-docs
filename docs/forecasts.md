# Forecast information

## Table of Contents

## Daily

### Input
`/locations/<geohash>/forecasts/daily`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint  

### Response type
```ts
interface ForecastItem {
  rain: {
    amount: {
      min?: number
      max?: number
      units?: string
    }
    chance?: number
  }
  uv: {
    category?: string
    end_time?: string
    max_index?: number
    start_time: string
  }
  now?: {
    is_night: boolean
		now_label: string
		later_label: string
		temp_now: number
		temp_later: number
  }

  date: string
  temp_max?: string
  temp_min?: string

  extended_text: string
  icon_descriptor: string
  short_text: string
  fire_danger?: string
}

interface ForecastRequest {
  data: Array<ForecastItem>
  metadata: {
    response_timestamp: string
    issue_time: string
    forecast_region: string
    forecast_type: string
  }
}
```

### Example output
[Jump to finish](#3-hourly)

```json
{
  "data": [
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 5
      },
      "uv": {
        "category": "veryhigh",
        "end_time": "2020-11-07T05:30:00Z",
        "max_index": 9,
        "start_time": "2020-11-06T22:00:00Z"
      },
      "astronomical": {
        "sunrise_time": "2020-11-06T18:56:27Z",
        "sunset_time": "2020-11-07T08:40:29Z"
      },
      "date": "2020-11-06T13:00:00Z",
      "temp_max": 21,
      "temp_min": null,
      "extended_text": "Partly cloudy. Light winds becoming easterly 15 to 25 km/h in the evening.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Partly cloudy.",
      "fire_danger": "Low-Moderate",
      "now": {
        "is_night": false,
        "now_label": "Overnight Min",
        "later_label": "Tomorrow's Max",
        "temp_now": 6,
        "temp_later": 21
      }
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "uv": {
        "category": "veryhigh",
        "end_time": "2020-11-08T05:40:00Z",
        "max_index": 9,
        "start_time": "2020-11-07T21:50:00Z"
      },
      "astronomical": {
        "sunrise_time": "2020-11-07T18:55:35Z",
        "sunset_time": "2020-11-08T08:41:30Z"
      },
      "date": "2020-11-07T13:00:00Z",
      "temp_max": 21,
      "temp_min": 6,
      "extended_text": "Partly cloudy. Light winds.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Partly cloudy.",
      "fire_danger": "Low-Moderate"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "uv": {
        "category": "veryhigh",
        "end_time": "2020-11-09T05:40:00Z",
        "max_index": 10,
        "start_time": "2020-11-08T21:50:00Z"
      },
      "astronomical": {
        "sunrise_time": "2020-11-08T18:54:46Z",
        "sunset_time": "2020-11-09T08:42:31Z"
      },
      "date": "2020-11-08T13:00:00Z",
      "temp_max": 23,
      "temp_min": 7,
      "extended_text": "The chance of fog in the early morning. Mostly sunny day. Light winds.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Mostly sunny.",
      "fire_danger": "Low-Moderate"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "uv": {
        "category": "veryhigh",
        "end_time": "2020-11-10T05:40:00Z",
        "max_index": 10,
        "start_time": "2020-11-09T21:50:00Z"
      },
      "astronomical": {
        "sunrise_time": "2020-11-09T18:53:57Z",
        "sunset_time": "2020-11-10T08:43:31Z"
      },
      "date": "2020-11-09T13:00:00Z",
      "temp_max": 26,
      "temp_min": 9,
      "extended_text": "The chance of morning fog. Sunny afternoon. Light winds.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Cloud clearing.",
      "fire_danger": "Low-Moderate"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 10
      },
      "uv": {
        "category": null,
        "end_time": null,
        "max_index": null,
        "start_time": null
      },
      "astronomical": {
        "sunrise_time": "2020-11-10T18:53:11Z",
        "sunset_time": "2020-11-11T08:44:32Z"
      },
      "date": "2020-11-10T13:00:00Z",
      "temp_max": 29,
      "temp_min": 10,
      "extended_text": "Mostly sunny. Light winds becoming northwesterly 15 to 20 km/h during the afternoon then becoming light during the evening.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Mostly sunny.",
      "fire_danger": null
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": 5,
          "units": "mm"
        },
        "chance": 80
      },
      "uv": {
        "category": null,
        "end_time": null,
        "max_index": null,
        "start_time": null
      },
      "astronomical": {
        "sunrise_time": "2020-11-11T18:52:26Z",
        "sunset_time": "2020-11-12T08:45:33Z"
      },
      "date": "2020-11-11T13:00:00Z",
      "temp_max": 24,
      "temp_min": 16,
      "extended_text": "Partly cloudy. High (80%) chance of showers, most likely later in the day. The chance of a thunderstorm later in the day. Light winds becoming northwesterly 15 to 25 km/h during the morning.",
      "icon_descriptor": "shower",
      "short_text": "Shower or two.",
      "fire_danger": null
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": 2,
          "units": "mm"
        },
        "chance": 50
      },
      "uv": {
        "category": null,
        "end_time": null,
        "max_index": null,
        "start_time": null
      },
      "astronomical": {
        "sunrise_time": "2020-11-12T18:51:42Z",
        "sunset_time": "2020-11-13T08:46:35Z"
      },
      "date": "2020-11-12T13:00:00Z",
      "temp_max": 26,
      "temp_min": 13,
      "extended_text": "Partly cloudy. Medium (50%) chance of showers. The chance of a thunderstorm later in the day. Light winds becoming northwesterly 15 to 25 km/h during the morning.",
      "icon_descriptor": "shower",
      "short_text": "Shower or two.",
      "fire_danger": null
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 20
      },
      "uv": {
        "category": null,
        "end_time": null,
        "max_index": null,
        "start_time": null
      },
      "astronomical": {
        "sunrise_time": "2020-11-13T18:51:00Z",
        "sunset_time": "2020-11-14T08:47:36Z"
      },
      "date": "2020-11-13T13:00:00Z",
      "temp_max": 25,
      "temp_min": 11,
      "extended_text": "Mostly sunny. Slight (20%) chance of a shower. Light winds becoming northwesterly 15 to 25 km/h during the day.",
      "icon_descriptor": "mostly_sunny",
      "short_text": "Mostly sunny.",
      "fire_danger": null
    }
  ],
  "metadata": {
    "response_timestamp": "2020-11-07T08:07:44Z",
    "issue_time": "2020-11-07T07:51:07Z",
    "forecast_region": "Canberra",
    "forecast_type": "metropolitan"
  }
}
```

## 3-Hourly

<div id="3-hourly"></div>

### Input
`/locations/<geohash>/forecasts/3-hourly`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint

### Example output
[Jump to finish](#rain)

```json
{
  "metadata": {
    "issue_time": "2020-11-07T07:51:08Z",
    "response_timestamp": "2020-11-07T08:30:08Z"
  },
  "data": [
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 5
      },
      "temp": 11,
      "wind": {
        "speed_knot": 15,
        "speed_kilometre": 28,
        "direction": "E"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-07T09:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-07T12:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 5
      },
      "temp": 7,
      "wind": {
        "speed_knot": 10,
        "speed_kilometre": 19,
        "direction": "E"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-07T12:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-07T15:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 6,
      "wind": {
        "speed_knot": 7,
        "speed_kilometre": 13,
        "direction": "ESE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-07T15:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-07T18:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 5,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "ESE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-07T18:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-07T21:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 9,
      "wind": {
        "speed_knot": 8,
        "speed_kilometre": 15,
        "direction": "ESE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-07T21:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-08T00:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 15,
      "wind": {
        "speed_knot": 8,
        "speed_kilometre": 15,
        "direction": "E"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T00:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-08T03:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 19,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "E"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T03:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-08T06:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 19,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "ENE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T06:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-08T09:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 14,
      "wind": {
        "speed_knot": 9,
        "speed_kilometre": 17,
        "direction": "ENE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T09:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-08T12:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 10,
      "wind": {
        "speed_knot": 7,
        "speed_kilometre": 13,
        "direction": "ESE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T12:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-08T15:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 7,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "SE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T15:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-08T18:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 6,
      "wind": {
        "speed_knot": 5,
        "speed_kilometre": 9,
        "direction": "SE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T18:00:00Z",
      "is_night": true,
      "next_forecast_period": "2020-11-08T21:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 10,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "ESE"
      },
      "icon_descriptor": "mostly_sunny",
      "time": "2020-11-08T21:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-09T00:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 17,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "ENE"
      },
      "icon_descriptor": "sunny",
      "time": "2020-11-09T00:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-09T03:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 21,
      "wind": {
        "speed_knot": 6,
        "speed_kilometre": 11,
        "direction": "ENE"
      },
      "icon_descriptor": "sunny",
      "time": "2020-11-09T03:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-09T06:00:00Z"
    },
    {
      "rain": {
        "amount": {
          "min": 0,
          "max": null,
          "units": "mm"
        },
        "chance": 0
      },
      "temp": 22,
      "wind": {
        "speed_knot": 8,
        "speed_kilometre": 15,
        "direction": "ENE"
      },
      "icon_descriptor": "sunny",
      "time": "2020-11-09T06:00:00Z",
      "is_night": false,
      "next_forecast_period": "2020-11-09T09:00:00Z"
    }
  ]
}
```

## Rain forecast

<div id="rain"></div>

Returns the current forecast for rain in the area

### Input
`/locations/<geohash>/forecast/rain`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint

### Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-11-10T08:10:00Z"
  },
  "data": {
    "amount": null,
    "chance": null,
    "start_time": null,
    "period": "PT3H"
  }
}
```
