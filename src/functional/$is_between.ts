export const $is_between = (value: number, minimum: number, maximum: number) =>
  minimum <= value && value <= maximum;
