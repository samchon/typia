import { $varint_encode } from "./$varint";

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
