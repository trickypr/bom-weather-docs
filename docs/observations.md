# Observations
Returns the observations of a location

## Input: 
`/locations/<geohash>/observations`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint  

## Response type
```ts
interface ObservationResponse {
  metadata: {
    response_timestamp: string
    issue_time: string
  }
  data: {
    temp?: number
    temp_feels_like?: number
    rain_since_9am?: number
    humidity?: number
    wind?: {
      speed_kilometre: number
      speed_knot: number
      direction: string
    }
    gust?: {
      speed_kilometre: number
      speed_knot: number
    }
    station?: {
      bom_id: string
      name: string
      distance: number
    }
  }
}
```

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-12-24T07:56:38Z",
    "issue_time": "2020-12-24T07:51:01Z"
  },
  "data": {
    "temp": 25.2,
    "temp_feels_like": 20,
    "wind": {
      "speed_kilometre": 22,
      "speed_knot": 12,
      "direction": "WNW"
    },
    "gust": {
      "speed_kilometre": 26,
      "speed_knot": 14
    },
    "rain_since_9am": 0,
    "humidity": 28,
    "station": {
      "bom_id": "070351",
      "name": "Canberra",
      "distance": 7204
    }
  }
}
```