export function $proto_i64_encode(
    dst: Uint8Array,
    offset: number,
    value: bigint,
): number {
    value = BigInt.asUintN(64, value);

    dst[offset] = Number(value & BigInt(0xff));
    dst[offset + 1] = Number((value >> BigInt(8)) & BigInt(0xff));
    dst[offset + 2] = Number((value >> BigInt(16)) & BigInt(0xff));
    dst[offset + 3] = Number((value >> BigInt(24)) & BigInt(0xff));
    dst[offset + 4] = Number((value >> BigInt(32)) & BigInt(0xff));
    dst[offset + 5] = Number((value >> BigInt(40)) & BigInt(0xff));
    dst[offset + 6] = Number((value >> BigInt(48)) & BigInt(0xff));
    dst[offset + 7] = Number((value >> BigInt(56)) & BigInt(0xff));
    offset += 8;

    return offset;
}
