# Location information
Returns some general data from the sever related to the location. This doesn't contain any weather data information. 

## Input: 
`/locations/<geohash>`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint  

## Response type
```ts
interface LocationInformationResponse {
  metadata: {
    response_timestamp: string
  }
  data: {
    geohash: string
    timezone: string
    latitude: number
    longitude: number
    marine_area_id?: string
    tidal_point?: string
    id: string
    name: string
    state: string
  }
}
```

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-12-24T07:31:58Z"
  },
  "data": {
    "geohash": "r3dp392",
    "timezone": "Australia/Canberra",
    "latitude": -35.28053283691406,
    "longitude": 149.1291046142578,
    "marine_area_id": null,
    "tidal_point": null,
    "id": "Canberra-r3dp392",
    "name": "Canberra",
    "state": "ACT"
  }
}
```
