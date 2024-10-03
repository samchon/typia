export const $isBetween = (value: number, minimum: number, maximum: number) =>
  minimum <= value && value <= maximum;
