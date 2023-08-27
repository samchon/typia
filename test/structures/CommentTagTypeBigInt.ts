import { Spoiler } from "../helpers/Spoiler";

export interface CommentTagTypeBigInt {
    in64: bigint;

    /**
     * @type uint64
     */
    uint64: bigint;
}
export namespace CommentTagTypeBigInt {
    export const JSONABLE = false;

    export function generate(): CommentTagTypeBigInt {
        return {
            in64: BigInt(-1),
            uint64: BigInt(1),
        };
    }

    export const SPOILERS: Spoiler<CommentTagTypeBigInt>[] = [
        (input) => {
            input.uint64 = BigInt(-1);
            return ["$input.uint64"];
        },
    ];
}
