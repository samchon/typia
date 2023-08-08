export const $is_date = (value: string): boolean => REGEX.test(value);

const REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;
