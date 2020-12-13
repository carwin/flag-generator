import Lozenge from './Lozenge';

describe('Lozenge class', () => {
  const fusilWithOptions = new Lozenge('#ffffff');
  const fusilNoOptions = new Lozenge();

  it('should instantiate when given all possible parameters', () => {
    expect(typeof fusilWithOptions.color).toBe('object');
    expect(fusilWithOptions.color.color).toBe('#ffffff');
  });

  it('should instantiate when given all possible parameters', () => {
    expect(typeof fusilNoOptions.color).toBe('object');
    expect(fusilNoOptions.color.color.length).toBeGreaterThan(0);
  });

});
