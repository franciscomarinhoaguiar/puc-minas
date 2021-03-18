test('should pass', () => {
  const value1 = 10;
  const value2 = 20;
  const soma = value1 + value2;
  expect(soma).toBe(30);
});

test('should async', (done) => {
  setTimeout(() => {
    const value1 = 10;
    const value2 = 20;
    const soma = value1 + value2;
    expect(soma).toBe(31);
    done();
  }, 2000);
});
