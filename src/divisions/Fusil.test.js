import Fusil from './Fusil';

describe('Fusil class', () => {
  const fusilWithOptions = new Fusil('#ffffff');
  const fusilNoOptions = new Fusil();

  it('should instantiate when given all possible parameters', () => {
    expect(typeof fusilWithOptions.color).toBe('object');
    expect(fusilWithOptions.color.color).toBe('#ffffff');
  });

  it('should instantiate when given all possible parameters', () => {
    expect(typeof fusilNoOptions.color).toBe('object');
    expect(fusilNoOptions.color.color.length).toBeGreaterThan(0);
  });

});
