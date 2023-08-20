import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_isStringify_AtomicIntersection = _test_isStringify(
    "AtomicIntersection",
    AtomicIntersection.generate,
    (input) =>
        ((input: AtomicIntersection): string | null => {
            const is = (input: any): input is AtomicIntersection => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const stringify = (input: AtomicIntersection): string => {
                const $number = (typia.isStringify as any).number;
                const $string = (typia.isStringify as any).string;
                return `[${input[0]},${$number(input[1])},${$string(
                    input[2],
                )}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    AtomicIntersection.SPOILERS,
);
