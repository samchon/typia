import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_isStringify_AtomicAlias = _test_isStringify(
    "AtomicAlias",
    AtomicAlias.generate,
    (input) =>
        ((input: [boolean, number, string]): string | null => {
            const is: any = (
                input: any,
            ): input is [boolean, number, string] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    "string" === typeof input[2]
                );
            };
            const stringify: any = (
                input: [boolean, number, string],
            ): string => {
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                return `[${input[0]},${$number(input[1])},${$string(
                    input[2],
                )}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    AtomicAlias.SPOILERS,
);
