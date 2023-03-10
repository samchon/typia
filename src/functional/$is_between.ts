export function $is_between(
    value: number,
    minimum: number,
    maximum: number,
): boolean {
    return minimum <= value && value <= maximum;
}
