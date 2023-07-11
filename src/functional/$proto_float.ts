export function $proto_float32_encode(
    dst: Uint8Array,
    offset: number,
    value: number,
): number {
    new DataView(dst.buffer).setFloat32(offset, value, true);
    offset += 4;
    return offset;
}

export function $proto_float32_decode(
    src: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    const value = new DataView(src.buffer).getFloat32(offset, true);
    offset += 4;
    return [value, offset];
}

export function $proto_float64_encode(
    dst: Uint8Array,
    offset: number,
    value: number,
): number {
    new DataView(dst.buffer).setFloat64(offset, value, true);
    offset += 8;
    return offset;
}

export function $proto_float64_decode(
    src: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    const value = new DataView(src.buffer).getFloat64(offset, true);
    offset += 8;
    return [value, offset];
}
