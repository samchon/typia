import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
export const test_assertStringify_ConstantAtomicWrapper = _test_assertStringify("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input) => ((input: any): string => { const assert = (input: any): [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>] => {
    const $guard = (typia.assertStringify as any).guard;
    const __is = (input: any): input is [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>] => {
        const $io0 = (input: any): boolean => "boolean" === typeof input.value;
        const $io1 = (input: any): boolean => "number" === typeof input.value && Number.isFinite(input.value);
        const $io2 = (input: any): boolean => "string" === typeof input.value;
        return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2])));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>] => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "boolean" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "boolean",
                value: input.value
            });
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "number" === typeof input.value && Number.isFinite(input.value) || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value
            });
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                value: input
            })) && ((input.length === 3 || $guard(true, {
                path: _path + "",
                expected: "[ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]",
                value: input
            })) && (("object" === typeof input[0] && null !== input[0] || $guard(true, {
                path: _path + "[0]",
                expected: "ConstantAtomicWrapper.IPointer<boolean>",
                value: input[0]
            })) && $ao0(input[0], _path + "[0]", true)) && (("object" === typeof input[1] && null !== input[1] || $guard(true, {
                path: _path + "[1]",
                expected: "ConstantAtomicWrapper.IPointer<number>",
                value: input[1]
            })) && $ao1(input[1], _path + "[1]", true)) && (("object" === typeof input[2] && null !== input[2] || $guard(true, {
                path: _path + "[2]",
                expected: "ConstantAtomicWrapper.IPointer<string>",
                value: input[2]
            })) && $ao2(input[2], _path + "[2]", true)));
        })(input, "$input", true);
    return input;
}; const stringify = (input: [ConstantAtomicWrapper.IPointer<boolean>, ConstantAtomicWrapper.IPointer<number>, ConstantAtomicWrapper.IPointer<string>]): string => {
    const $number = (typia.assertStringify as any).number;
    const $string = (typia.assertStringify as any).string;
    return `[${`{"value":${input[0].value}}`},${`{"value":${$number(input[1].value)}}`},${`{"value":${$string(input[2].value)}}`}]`;
}; return stringify(assert(input)); })(input), ConstantAtomicWrapper.SPOILERS);
