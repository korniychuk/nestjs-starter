import { foo } from './my';

describe('my', () => {
  it('Jest should work', () => {
    // act
    const res = foo();

    // assert
    expect(res).toBe('bar');
  });

  it('jest-extended matchers test', () => {
    // act
    const res = foo();

    // assert
    expect(res).toHaveLength(3);
  });
});
