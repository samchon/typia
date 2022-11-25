import { $varint_encode } from "./$varint";

export enum $proto_field_wiretype {
    VARINT = 0,
    I64 = 1,
    LEN = 2,
    SGROUP = 3, // deprecated
    EGROUP = 4, // deprecated
    I32 = 5,
}

export function $proto_field_encode(
    dst: Uint8Array,
    offset: number,
    fieldNumber: number,
    wireType: $proto_field_wiretype,
): number {
    const tag = (fieldNumber << 3) | Number(wireType);
    return $varint_encode(dst, offset, tag);
}
