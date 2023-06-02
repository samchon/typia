import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_isStringify_TupleRestAtomic = _test_isStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: [boolean, number, ...string[]]): string | null => {
            const is: any = (
                input: any,
            ): input is [boolean, number, ...string[]] => {
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every((elem: any) => "string" === typeof elem)
                );
            };
            const stringify: any = (
                input: [boolean, number, ...string[]],
            ): string => {
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $rest: any = (typia.isStringify as any).rest;
                return `[${input[0]},${$number(input[1])}${$rest(
                    (() =>
                        `[${input
                            .slice(2)
                            .map((elem: any) => $string(elem))
                            .join(",")}]`)(),
                )}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TupleRestAtomic.SPOILERS,
);
