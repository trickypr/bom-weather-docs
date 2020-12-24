# Search
This lets you pass in a string name and returns all of the possible locations that match your search.

## Input: 
`locations?search=<location>`

`location`: The search string. Must be 3 or more characters long otherwise you will get an `Access Denied` error.

## Response type
```ts
interface SearchResponse {
  metadata: {
    response_timestamp: string // Can be converted to Date
  }
  data: Array<{
    geohash: string
    id: string
    name: string
    postcode: string
    state: string
  }>
}
```

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
