export const $httpFormDataReadArray = (
  input: any[],
  alternative: null | undefined,
) => (input.length ? input : alternative);
