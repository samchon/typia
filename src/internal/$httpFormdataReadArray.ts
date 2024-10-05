export const $httpFormdataReadArray = (
  input: any[],
  alternative: null | undefined,
) => (input.length ? input : alternative);
