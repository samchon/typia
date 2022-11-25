import { $proto_bytes_decode, $proto_bytes_encode } from "./$proto_bytes";

const utf8_encoder = new TextEncoder();

export function $proto_string_encode(
    dst: Uint8Array,
    offset: number,
    value: string,
): number {
    // TODO: optimize (DON'T ENCODE TEXT TWICE)

    const bytes = utf8_encoder.encode(value);
    return $proto_bytes_encode(dst, offset, bytes);
}

export function $proto_string_decode(
    src: Uint8Array,
    offset: number,
): [value: string, offset: number] {
    const utf8_decoder = new TextDecoder("utf-8");
    const [bytes, o] = $proto_bytes_decode(src, offset);
    const value = utf8_decoder.decode(bytes);
    return [value, o];
}
