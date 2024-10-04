export const $httpQueryArray = (input: any[], alternative: null | undefined) =>
  input.length ? input : alternative;
