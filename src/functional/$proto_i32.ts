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
