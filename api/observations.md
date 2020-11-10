# Observations
Returns the observations of a location

## Input: 
`/locations/<geohash>/observations`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search) endpoint  

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-11-10T08:07:33Z",
    "issue_time": "2020-11-10T08:01:03Z"
  },
  "data": {
    "temp": 22.3,
    "temp_feels_like": 19.9,
    "wind": {
      "speed_kilometre": 15,
      "speed_knot": 8,
      "direction": "N"
    },
    "gust": {
      "speed_kilometre": 17,
      "speed_knot": 9
    },
    "rain_since_9am": 0,
    "humidity": 50,
    "station": {
      "bom_id": "070351",
      "name": "Canberra",
      "distance": 7204
    }
  }
}
```