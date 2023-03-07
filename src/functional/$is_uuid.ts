export function $is_uuid(str: string): boolean {
    return REGEX.test(str);
}
const REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
