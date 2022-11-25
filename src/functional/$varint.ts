function EncodeVarNumber(
    dst: Uint8Array,
    offset: number,
    value: number,
): number {
    value = (value | 0) >>> 0; // 32-bit integer

    while (value > 127) {
        dst[offset++] = (value & 0b01111111) | 0b10000000;
        value >>>= 7;
    }
    dst[offset++] = value;

    return offset;
}

function DecodeVarNumber(
    buf: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    let value = 0;
    let shift = 0;

    while (true) {
        const byte = buf[offset++]!;
        value |= (byte & 0b01111111) << shift;
        if (byte < 128) {
            break;
        }
        shift += 7;
    }

    return [value | 0, offset];
}

function DecodeVarBigInt(
    buf: Uint8Array,
    offset: number,
): [value: bigint, offset: number] {
    let value = BigInt(0);
    let shift = BigInt(0);

    while (true) {
        const byte = buf[offset++]!;
        value |= BigInt(byte & 0b01111111) << shift;
        if (byte < 128) {
            break;
        }
        shift += BigInt(7);
    }

    return [BigInt.asIntN(64, value), offset];
}

export function $varint_decode_i32(
    buf: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    const [v, o] = DecodeVarNumber(buf, offset);
    return [v, o];
}

export function $varint_decode_u32(
    buf: Uint8Array,
    offset: number,
): [value: number, offset: number] {
    const [v, o] = DecodeVarNumber(buf, offset);
    return [v >>> 0, o];
}

export function $varint_decode_i64(
    buf: Uint8Array,
    offset: number,
): [value: bigint, offset: number] {
    const [v, o] = DecodeVarBigInt(buf, offset);
    return [v, o];
}

export function $varint_decode_u64(
    buf: Uint8Array,
    offset: number,
): [value: bigint, offset: number] {
    const [v, o] = DecodeVarBigInt(buf, offset);
    return [BigInt.asUintN(64, v), o];
}

function EncodeVarBigInt(
    dst: Uint8Array,
    offset: number,
    value: bigint,
): number {
    value = BigInt.asUintN(64, value);

    while (value > BigInt(127)) {
        dst[offset++] = Number(value & BigInt(0b01111111)) | 0b10000000;
        value >>= BigInt(7);
    }
    dst[offset++] = Number(value);

    return offset;
}

export function $varint_encode(
    dst: Uint8Array,
    offset: number,
    value: number,
): number;
export function $varint_encode(
    dst: Uint8Array,
    offset: number,
    value: bigint,
): number;

export function $varint_encode(
    dst: Uint8Array,
    offset: number,
    value: number | bigint,
): number {
    if (typeof value === "bigint") {
        offset = EncodeVarBigInt(dst, offset, value);
    } else {
        if (value < 0) {
            // NOTE: Protocol Buffers signed varint encoding uses two's complement of 64-bit unsigned integers.
            offset = EncodeVarBigInt(dst, offset, BigInt(value));
        } else {
            offset = EncodeVarNumber(dst, offset, value);
        }
    }
    return offset;
}
