import test from 'ava'
import { canberra, get, sydney } from './constants'

test('Canberra', async t => {
  const request = await get(`locations/${canberra}`)

  t.is(request.data.geohash, canberra)
  t.is(request.data.timezone, 'Australia/Canberra')
  t.is(request.data.latitude, -35.28053283691406)
  t.is(request.data.longitude, 149.1291046142578)
  t.is(request.data.marine_area_id, null)
  t.is(request.data.tidal_point, null)
  t.is(request.data.id, 'Canberra-r3dp392')
  t.is(request.data.name, 'Canberra')
  t.is(request.data.state, 'ACT')
})

test('Sydney', async t => {
  const request = await get(`locations/${sydney}`)

  t.is(request.data.geohash, sydney)
  t.is(request.data.timezone, 'Australia/Sydney')
  t.is(request.data.latitude, -33.86741638183594)
  t.is(request.data.longitude, 151.2096405029297)
  t.is(request.data.marine_area_id, 'NSW_MW009')
  t.is(request.data.tidal_point, 'NSW_TP007')
  t.is(request.data.id, 'Sydney-r3gx2fe')
  t.is(request.data.name, 'Sydney')
  t.is(request.data.state, 'NSW')
})
