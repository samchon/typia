import { Spoiler } from "../helpers/Spoiler";

export interface TagTypeBigInt {
    in64: bigint;

    /**
     * @type uint64
     */
    uint64: bigint;
}
export namespace TagTypeBigInt {
    export const JSONABLE = false;

    export function generate(): TagTypeBigInt {
        return {
            in64: BigInt(-1),
            uint64: BigInt(1),
        };
    }

    export const SPOILERS: Spoiler<TagTypeBigInt>[] = [
        (input) => {
            input.uint64 = BigInt(-1);
            return ["$input.uint64"];
        },
    ];
}
