import { $proto_bytes_encode } from "./$proto_bytes";

const utf8 = new TextEncoder();

export function $proto_string_encode(
    dst: Uint8Array,
    offset: number,
    value: string,
): number {
    // TODO: optimize (DON'T ENCODE TEXT TWICE)

    const bytes = utf8.encode(value);
    return $proto_bytes_encode(dst, offset, bytes);
}
