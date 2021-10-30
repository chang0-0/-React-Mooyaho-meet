import client from './client'

/**
 * @param {string} code
 * @returns {Promise<id: number, code: string, channelId: string>}
 */

export async function createMeet(code) {
  const { data } = client.post('/meet', { code })
  return data
}
