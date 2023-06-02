import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_createIsStringify_TupleRestObject = _test_isStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input: TupleRestObject): string | null => {
        const is: any = (input: any): input is TupleRestObject => {
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
        const stringify: any = (input: TupleRestObject): string => {
            const $number: any = (typia.createIsStringify as any).number;
            const $string: any = (typia.createIsStringify as any).string;
            const $rest: any = (typia.createIsStringify as any).rest;
            return `[${input[0]},${$number(input[1])}${$rest(
                (() =>
                    `[${input
                        .slice(2)
                        .map((elem: any) => `{"value":${$string(elem.value)}}`)
                        .join(",")}]`)(),
            )}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    TupleRestObject.SPOILERS,
);
