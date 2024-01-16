import {
  debounce,
  throttle,
  deepClone,
  loadScript,
  getQuery,
  paramToObj,
  detectDeviceOS,
  getDictText
} from 'utils'

jest.useFakeTimers()

// 测试 debounce 函数
describe('debounce', () => {
  test('debounce function execution', () => {
    const func = jest.fn()
    const debouncedFunc = debounce(func, 1000)

    debouncedFunc()
    expect(func).not.toHaveBeenCalled()

    jest.advanceTimersByTime(1000)
    expect(func).toHaveBeenCalled()
  })
})

// 测试 throttle 函数
describe('throttle', () => {
  test('throttles function execution', () => {
    const func = jest.fn()
    const throttledFunc = throttle(func, 1000, true)

    throttledFunc() // 立即执行
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(500)
    throttledFunc() // 在500ms时，不执行
    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(2000)
    throttledFunc() // 在2000ms时，执行
    expect(func).toHaveBeenCalledTimes(2)
  })
})

// 测试 deepClone 函数
describe('deepClone', () => {
  test('deeply clones objects', () => {
    const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3] }
    const clonedObj = deepClone(obj)

    expect(clonedObj).toEqual(obj)
    expect(clonedObj).not.toBe(obj)
    expect(clonedObj.b).not.toBe(obj.b)
    expect(clonedObj.d).not.toBe(obj.d)
  })
})

// 测试 loadScript 函数
describe('loadScript', () => {})

// 测试 getQuery 函数
describe('getQuery', () => {
  test('retrieves query parameter', () => {
    delete window.location
    window.location = { search: '?param1=value1&param2=value2' }

    expect(getQuery('param1')).toBe('value1')
    expect(getQuery('param2')).toBe('value2')
    expect(getQuery('param3')).toBe('')
  })
})

// 测试 paramToObj 函数
describe('paramToObj', () => {
  test('converts query string to object', () => {
    const url = 'http://example.com?param1=value1&param2=value2'
    expect(paramToObj(url)).toEqual({ param1: 'value1', param2: 'value2' })
  })

  test('returns empty object for no query string', () => {
    const url = 'http://example.com'
    expect(paramToObj(url)).toEqual({})
  })
})

// 测试 detectDeviceOS 函数
describe('detectDeviceOS', () => {
  test('detects iOS', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'iPad',
      configurable: true
    })
    expect(detectDeviceOS()).toBe('iOS')
  })

  test('detects Android', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'android',
      configurable: true
    })
    expect(detectDeviceOS()).toBe('android')
  })

  test('detects unknown', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'some other user agent',
      configurable: true
    })
    expect(detectDeviceOS()).toBe('unknown')
  })
})

// 测试 getDictText 函数
describe('getDictText', () => {
  test('gets text from dictionary', () => {
    const dict = [
      { value: '1', text: 'One' },
      { value: '2', text: 'Two' }
    ]

    expect(getDictText('1', dict)).toBe('One')
    expect(getDictText('3', dict)).toBe('未知字典值')
  })
})
