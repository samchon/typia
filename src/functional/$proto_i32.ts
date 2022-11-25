export function $proto_i32_encode(
    dst: Uint8Array,
    offset: number,
    value: number,
): number {
    value = (value | 0) >>> 0;

    dst[offset] = value & 0xff;
    dst[offset + 1] = (value >>> 8) & 0xff;
    dst[offset + 2] = (value >>> 16) & 0xff;
    dst[offset + 3] = (value >>> 24) & 0xff;
    offset += 4;

    return offset;
}

export function $proto_i32_decode(
    buf: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    const value =
        (buf[offset]! << 0) |
        (buf[offset + 1]! << 8) |
        (buf[offset + 2]! << 16) |
        (buf[offset + 3]! << 24);
    offset += 4;

    return [value, offset];
}
