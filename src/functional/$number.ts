export function $number(value: number) {
    return isFinite(value) && !isNaN(value) ? value : null;
}
