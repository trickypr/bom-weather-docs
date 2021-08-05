# Warnings

Get any weather warnings (e.g. flooding warning, hail warning) for your location

## Table of Contents

## Location warnings list

### Input:

`/locations/<geohash>/warnings`

`geohash`: A unique ID for this location, can be retrieved using the [search](./search.md) endpoint

### Response type

```ts
interface WarningResponse {
  metadata: {
    response_timestamp: string;
  };
  data: Array<{
    id: string;
    type: string;
    title: string;
    short_title: string;
    state: string;
    warning_group_type: string;
    issue_time: string;
    expiry_time: string;
    phase: string;
  }>;
}
```

### Example output

```json
{
  "data": [
    {
      "id": "NSW_MW001_IDN20400",
      "type": "marine_wind_warning",
      "title": "Marine Wind Warning for New South Wales",
      "short_title": "Marine Wind Warning",
      "state": "NSW",
      "warning_group_type": "major",
      "issue_time": "2021-08-05T06:05:00Z",
      "expiry_time": "2021-08-05T14:05:00.000Z",
      "phase": "renewal"
    }
  ],
  "metadata": {
    "response_timestamp": "2021-08-05T07:29:44Z"
  }
}
```

## Warning details

`/warnings/<id>`

`id`: A unique ID for this warning, can be retrieved using the [location warnings](#location-warnings-list) endpoint

### Response type

```ts
interface WarningResponse {
  metadata: {
    issue_time: string;
    response_timestamp: string;
  };
  data: Array<{
    id: string;
    type: string;
    title: string;
    short_title: string;
    state: string;
    message: string;
    issue_time: string;
    expiry_time: string;
    phase: string;
  }>;
}
```

### Example output

```json
{
  "data": [
    {
      "id": "NSW_MW001_IDN20400",
      "type": "marine_wind_warning",
      "title": "Marine Wind Warning for New South Wales",
      "short_title": "Marine Wind Warning",
      "state": "NSW",
      "warning_group_type": "major",
      "issue_time": "2021-08-05T06:05:00Z",
      "expiry_time": "2021-08-05T14:05:00.000Z",
      "phase": "renewal"
    }
  ],
  "metadata": {
    "response_timestamp": "2021-08-05T07:29:44Z"
  }
}
```
