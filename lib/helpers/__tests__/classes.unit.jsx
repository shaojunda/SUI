import classes from "../classes";

describe("classes", () => {
  it('accept zero className', () => {
    const result = classes('')
    expect(result).toEqual('')
  })

  it('accept one className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })

  it('accept two className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })

  it('accept undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
})
