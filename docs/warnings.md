# Warnings
Get any weather warnings (e.g. flooding warning, hail warning) for your location

## Table of Contents

## Input: 
`/locations/<geohash>/warnings`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint  

## Response type
```ts
interface WarningResponse {
  metadata: {
    response_timestamp: string
  },
  data: Array<{
    id: string
    type: string
    title: string
    short_title: string
    state: string
    warning_group_type: string
    issue_time: string
    expiry_time: string
    phase: string
  }>
}
```

## Example output
```json
{
  "metadata": {
    "response_timestamp": "2020-11-10T08:13:59Z"
  },
  "data": []
}
```
