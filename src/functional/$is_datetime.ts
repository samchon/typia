export const $is_datetime = (value: string): boolean =>
    !isNaN(new Date(value).getTime());
