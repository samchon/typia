export function $numberNullable(value: number): number | null {
    return isFinite(value) && !isNaN(value) ? value : null;
}
