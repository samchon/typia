import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_isStringify_TupleRestObject = _test_isStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((
            input: [boolean, number, ...TupleRestObject.IObject[]],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is [boolean, number, ...TupleRestObject.IObject[]] => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.value;
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io0(elem),
                        )
                );
            };
            const stringify: any = (
                input: [boolean, number, ...TupleRestObject.IObject[]],
            ): string => {
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $rest: any = (typia.isStringify as any).rest;
                return `[${input[0]},${$number(input[1])}${$rest(
                    (() =>
                        `[${input
                            .slice(2)
                            .map(
                                (elem: any) =>
                                    `{"value":${$string(elem.value)}}`,
                            )
                            .join(",")}]`)(),
                )}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TupleRestObject.SPOILERS,
);
