import { $varint_decode_i32, $varint_encode } from "./$varint";

export function $proto_bytes_encode(
    dst: Uint8Array,
    offset: number,
    value: Uint8Array,
): number {
    offset = $varint_encode(dst, offset, value.length);
    dst.set(value, offset);
    offset += value.length;
    return offset;
}

export function $proto_bytes_decode(
    src: Uint8Array,
    offset: number,
): [value: Uint8Array, offset: number] {
    let length = 0;

    [length, offset] = $varint_decode_i32(src, offset); // Max Length: ~2GB
    const value = src.subarray(offset, offset + length);
    offset += length;

    return [value, offset];
}
