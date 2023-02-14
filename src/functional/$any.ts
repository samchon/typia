export function $any(val: any): any {
    return val !== undefined ? JSON.parse(JSON.stringify(val)) : undefined;
}
