# Search
This lets you pass in a string name and returns all of the possible locations that match your search.

## Input: 
`locations?search=<location>`

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-11-07T06:52:10Z"
  },
  "data": [
    {
      "geohash": "r3dp392",
      "id": "Canberra-r3dp392",
      "name": "Canberra",
      "postcode": "2601",
      "state": "ACT"
    },
    {
      "geohash": "r3dp4vp",
      "id": "Canberra Airport-r3dp4vp",
      "name": "Canberra Airport",
      "postcode": "2609",
      "state": "ACT"
    }
  ]
}
```