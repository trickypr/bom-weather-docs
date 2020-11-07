# Location information
Returns some general data from the sever related to the location. This doesn't contain any weather data information. 

## Input: 
`/locations/<geohash>`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search) endpoint  

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-11-07T07:00:07Z"
  },
  "data": {
    "geohash": "r3dp392",
    "timezone": "Australia/Canberra",
    "latitude": -35.28053283691406,
    "longitude": 149.1291046142578,
    "marine_area_id": null,
    "id": "Canberra-r3dp392",
    "name": "Canberra",
    "state": "ACT"
  }
}
```
