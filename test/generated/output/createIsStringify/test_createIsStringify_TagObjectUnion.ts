import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createIsStringify_TagObjectUnion = _test_isStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: TagObjectUnion): string | null => {
        const is: any = (input: any): input is TagObjectUnion => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $iu0: any = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $io1(input);
                    if (
                        "number" === typeof input.value &&
                        Number.isFinite(input.value)
                    )
                        return $io0(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $iu0(elem),
                )
            );
        };
        const stringify: any = (input: TagObjectUnion): string => {
            const $io0: any = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1: any = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $number: any = (typia.createIsStringify as any).number;
            const $string: any = (typia.createIsStringify as any).string;
            const $throws: any = (typia.createIsStringify as any).throws;
            const $so0: any = (input: any): any =>
                `{"value":${$number(input.value)}}`;
            const $so1: any = (input: any): any =>
                `{"value":${$string(input.value)}}`;
            const $su0: any = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $so1(input);
                    if ("number" === typeof input.value) return $so0(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
                })();
            return (() =>
                `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
        };
        return is(input) ? stringify(input) : null;
    },
    TagObjectUnion.SPOILERS,
);
