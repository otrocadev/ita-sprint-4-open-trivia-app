import {
  decodeHtml,
  getrandomCompliment,
  makeComponentHidden,
  makeComponentVisible,
  manageResponse,
  restartGame,
} from '../../src/utils/appUtils'
import { gameData } from '../../src/stored/gameData'
import { complimentsPool } from '../../src/stored/static-content'

// Mock window.location.reload to prevent actual page reload in tests
const mockReload = jest.fn()

// Create a proper mock location object
delete (window as any).location
window.location = {
  href: 'http://localhost',
  origin: 'http://localhost',
  protocol: 'http:',
  host: 'localhost',
  hostname: 'localhost',
  port: '',
  pathname: '/',
  search: '',
  hash: '',
  reload: mockReload,
} as any

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

describe('Function "makeComponentVisible"', () => {
  it('should be declared', () => {
    expect(typeof makeComponentVisible).toBe('function')
  })
  it('should make component visible', () => {
    const component = document.createElement('div')
    makeComponentVisible(component)
    expect(component.classList.contains('flex')).toBe(true)
    expect(component.classList.contains('hidden')).toBe(false)
  })
})

describe('Function "makeComponentHidden"', () => {
  it('should be declared', () => {
    expect(typeof makeComponentHidden).toBe('function')
  })
  it('should make component hidden', () => {
    const component = document.createElement('div')
    makeComponentHidden(component)
    expect(component.classList.contains('flex')).toBe(false)
    expect(component.classList.contains('hidden')).toBe(true)
  })
})

describe('Function "restartGame"', () => {
  beforeEach(() => {
    // Clear the mock before each test
    mockReload.mockClear()
  })

  it('should be declared', () => {
    expect(typeof restartGame).toBe('function')
  })

  it('should reset game storage data', () => {
    restartGame()
    expect(gameData.coins).toBe(0)
    expect(gameData.lives).toBe(3)
  })
})

describe('Function "manageResponse"', () => {
  it('should be declared', () => {
    expect(typeof manageResponse).toBe('function')
  })
  it('should return a string', () => {
    expect(typeof manageResponse(true)).toBe('string')
  })
  it('should return "correct" when the response is isCorrect', () => {
    expect(manageResponse(true)).toBe('correct')
  })
  it('should return "incorrect" when the response is not isCorrect', () => {
    expect(manageResponse(false)).toBe('incorrect')
  })
  // add more use cases
})

describe('Function "getrandomCompliment"', () => {
  it('should be declared', () => {
    expect(typeof getrandomCompliment).toBe('function')
  })
  it('should return a string', () => {
    expect(typeof getrandomCompliment()).toBe('string')
  })
  it('should return a random compliment', () => {
    const compliment = getrandomCompliment() || ''
    expect(complimentsPool.includes(compliment)).toBe(true)
  })
})
