export function $is_datetime(value: string): boolean {
    return !isNaN(new Date(value).getTime());
}
