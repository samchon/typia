export const $httpQueryReadArray = (
  input: any[],
  alternative: null | undefined,
) => (input.length ? input : alternative);
