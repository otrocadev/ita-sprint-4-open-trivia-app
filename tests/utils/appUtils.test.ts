import { decodeHtml } from '../../src/utils/appUtils'

jest.mock('../../src/utils/gameDataManagementUtils.ts', () => ({
  resetGameStorageData: jest.fn(),
  getCoinsData: jest.fn(),
  getLivesData: jest.fn(),
  updateCoinsData: jest.fn(),
  updateLivesData: jest.fn(),
}))

jest.mock('../../src/stored/static-content.ts', () => ({
  complimentsPool: ['Great job!', 'Excellent!', 'Amazing!', 'Well done!'],
}))

describe('Function "decodeHtml"', () => {
  it('should be declared', () => {
    expect(typeof decodeHtml).toBe('function')
  })
  it('should return a string', () => {
    expect(typeof decodeHtml('Hello &amp; World')).toBe('string')
  })
  it('should decode HTML entities', () => {
    expect(decodeHtml('Hello &amp; World')).toBe('Hello & World')
  })
})
