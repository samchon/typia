export const $any = (val: any): any =>
    val !== undefined ? JSON.parse(JSON.stringify(val)) : undefined;
