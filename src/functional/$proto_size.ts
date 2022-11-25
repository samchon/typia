export function $proto_size_varint(n: number): number;
export function $proto_size_varint(n: bigint): number;

export function $proto_size_varint(n: number | bigint): number {
    if (typeof n === "number") {
        if (n < 0) {
            return SizeVarInt64(BigInt(n));
        }
        return SizeVarInt32(n);
    }

    return SizeVarInt64(n);
}

function SizeVarInt32(value: number): number {
    value = (value | 0) >>> 0; // 32-bit integer
    // TODO: optimize ( branchless solution exists )
    // TODO: try lookup table based solution

    if (value <= 127) {
        return 1;
    } else if (value <= 16383) {
        return 2;
    } else if (value <= 2097151) {
        return 3;
    } else if (value <= 268435455) {
        return 4;
    }

    // < 34359738367
    return 5;
}

function SizeVarInt64(value: bigint): number {
    value = BigInt.asUintN(64, value);
    // TODO: optimize ( branchless solution exists )
    // TODO: try lookup table based solution

    if (value <= BigInt("127")) {
        return 1;
    } else if (value <= BigInt("16383")) {
        return 2;
    } else if (value <= BigInt("2097151")) {
        return 3;
    } else if (value <= BigInt("268435455")) {
        return 4;
    } else if (value <= BigInt("34359738367")) {
        return 5;
    } else if (value <= BigInt("4398046511103")) {
        return 6;
    } else if (value <= BigInt("562949953421311")) {
        return 7;
    } else if (value <= BigInt("72057594037927935")) {
        return 8;
    } else if (value <= BigInt("9223372036854775807")) {
        return 9;
    }

    return 10;
}
