import { $clone } from "./$clone";

export const $any = (val: any): any =>
    val !== undefined ? $clone(val) : undefined;
