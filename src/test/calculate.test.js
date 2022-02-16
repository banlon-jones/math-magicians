import calculate from '../logic/calculate';

describe('calculator test', () => {
  it('click AC', () => {
    expect(calculate(null, 'AC')).toEqual(
      expect.objectContaining({
        total: null,
        next: null,
        operation: null,
      }),
    );
  });
  it('when next is zero ', () => {
    const res = calculate({ total: null, next: 0, operation: null }, '0');
    expect(res.next).toEqual('0');
    expect(res.total).toEqual(null);
  });
  it(' plus operator', () => {
    const res = calculate({ total: null, next: 9, operation: '+' }, '6');
    expect(res.next).toEqual('96');
    expect(res.total).toEqual(null);
  });
  it(' negative figure ', () => {
    const res = calculate({ total: null, next: 6, operation: '-' }, '+/-');
    expect(res.next).toEqual('-6');
    expect(res.total).toEqual(null);
  });

  it(' equal button pressed ', () => {
    const res = calculate({ total: 0, next: 6, operation: '-' }, '=');
    expect(res.total).toEqual('-6');
  });
});
