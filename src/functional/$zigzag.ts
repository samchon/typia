export function $zigzag_encode(value: number): number;
export function $zigzag_encode(value: bigint): bigint;
export function $zigzag_encode(value: number | bigint): any {
    // TODO: optimize (branchless solution exists)

    if (typeof value === "bigint") {
        if (value < BigInt(0)) {
            value = -value;
            return value * BigInt(2) - BigInt(1);
        }
        return value * BigInt(2);
    }

    if (value < 0) {
        value = -value;
        return value * 2 - 1;
    }
    return value * 2;
}

export function $zigzag_decode(value: number): number;
export function $zigzag_decode(value: bigint): bigint;
export function $zigzag_decode(value: number | bigint): any {
    // TODO: optimize (branchless solution exists)

    if (typeof value === "bigint") {
        value = BigInt.asUintN(64, value);
        if (value & BigInt(1)) {
            return -(value + BigInt(1)) / BigInt(2);
        }
        return value / BigInt(2);
    }

    value = value >>> 0;
    if (value & 1) {
        return -(value + 1) / 2;
    }
    return value / 2;
}
