// Mock API modules to avoid import.meta.env issues in tests
jest.mock('../src/services/inultAPI', () => ({
  getInsult: jest.fn().mockResolvedValue('Test insult message')
}))

jest.mock('../src/services/motivationAPI', () => ({
  getMotivationalQuote: jest.fn().mockResolvedValue('Test motivation message')
}))