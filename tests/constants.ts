import got from 'got'

export async function get(url: string): Promise<any> {
  return await got(`https://api.weather.bom.gov.au/v1/${url}`).json() as any
}