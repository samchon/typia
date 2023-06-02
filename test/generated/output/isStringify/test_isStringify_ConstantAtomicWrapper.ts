import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_isStringify_ConstantAtomicWrapper = _test_isStringify(
    "ConstantAtomicWrapper",
    ConstantAtomicWrapper.generate,
    (input) =>
        ((
            input: [
                ConstantAtomicWrapper.IPointer<boolean>,
                ConstantAtomicWrapper.IPointer<number>,
                ConstantAtomicWrapper.IPointer<string>,
            ],
        ): string | null => {
            const is: any = (
                input: any,
            ): input is [
                ConstantAtomicWrapper.IPointer<boolean>,
                ConstantAtomicWrapper.IPointer<number>,
                ConstantAtomicWrapper.IPointer<string>,
            ] => {
                const $io0: any = (input: any): boolean =>
                    "boolean" === typeof input.value;
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value);
                const $io2: any = (input: any): boolean =>
                    "string" === typeof input.value;
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    "object" === typeof input[0] &&
                    null !== input[0] &&
                    $io0(input[0]) &&
                    "object" === typeof input[1] &&
                    null !== input[1] &&
                    $io1(input[1]) &&
                    "object" === typeof input[2] &&
                    null !== input[2] &&
                    $io2(input[2])
                );
            };
            const stringify: any = (
                input: [
                    ConstantAtomicWrapper.IPointer<boolean>,
                    ConstantAtomicWrapper.IPointer<number>,
                    ConstantAtomicWrapper.IPointer<string>,
                ],
            ): string => {
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                return `[${`{"value":${input[0].value}}`},${`{"value":${$number(
                    input[1].value,
                )}}`},${`{"value":${$string(input[2].value)}}`}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ConstantAtomicWrapper.SPOILERS,
);
