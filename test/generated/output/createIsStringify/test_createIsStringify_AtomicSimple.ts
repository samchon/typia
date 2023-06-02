import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_createIsStringify_AtomicSimple = _test_isStringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input: AtomicSimple): string | null => {
        const is: any = (input: any): input is AtomicSimple => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                "string" === typeof input[2]
            );
        };
        const stringify: any = (input: AtomicSimple): string => {
            const $number: any = (typia.createIsStringify as any).number;
            const $string: any = (typia.createIsStringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    AtomicSimple.SPOILERS,
);
