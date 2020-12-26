import test from 'ava'
import { get, assert_attributes } from './constants'

test('Canberra', async t => {
  const response = await get('locations?search=Canberra')

  assert_attributes(t, response.data[0].geohash, 'r3dp392')
  assert_attributes(t, response.data[0].id, 'Canberra-r3dp392')
  assert_attributes(t, response.data[0].name, 'Canberra')
  assert_attributes(t, response.data[0].postcode, '2601')
  assert_attributes(t, response.data[0].state, 'ACT')
})

test('Sydney', async t => {
  const response = await get('locations?search=Sydney')

  assert_attributes(t, response.data[0].geohash, 'r3gx2fe')
  assert_attributes(t, response.data[0].id, 'Sydney-r3gx2fe')
  assert_attributes(t, response.data[0].name, 'Sydney')
  assert_attributes(t, response.data[0].postcode, '2000')
  assert_attributes(t, response.data[0].state, 'NSW')
})
