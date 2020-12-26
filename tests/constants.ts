import { ExecutionContext } from 'ava'
import got from 'got'

export const canberra = 'r3dp392'
export const sydney = 'r3gx2fe'

export function assert_attributes<T>(t: ExecutionContext, value: T, expected: T) {
  t.is(value, expected)
  t.is(typeof value, typeof expected)
}

export async function get(url: string): Promise<any> {
  return await got(`https://api.weather.bom.gov.au/v1/${url}`).json() as any
}