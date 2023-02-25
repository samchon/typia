import typia from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ConstantAtomicWrapper = _test_assertClone("ConstantAtomicWrapper", ConstantAtomicWrapper.generate, (input) => ((input: any): typia.Primitive<ConstantAtomicWrapper> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ConstantAtomicWrapper => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "boolean" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "boolean",
            value: input.value
        });
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => "number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        });
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ConstantAtomicWrapper.IPointer<boolean>>, Resolve<ConstantAtomicWrapper.IPointer<number>>, Resolve<ConstantAtomicWrapper.IPointer<string>>]",
            value: input
        })) && (("object" === typeof input[0] && null !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<boolean>>",
            value: input[0]
        })) && $ao0(input[0], _path + "[0]", true)) && (("object" === typeof input[1] && null !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<number>>",
            value: input[1]
        })) && $ao1(input[1], _path + "[1]", true)) && (("object" === typeof input[2] && null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "Resolve<ConstantAtomicWrapper.IPointer<string>>",
            value: input[2]
        })) && $ao2(input[2], _path + "[2]", true)));
    })(input, "$input", true);
    return input as ConstantAtomicWrapper;
}; const clone = (input: ConstantAtomicWrapper): typia.Primitive<ConstantAtomicWrapper> => {
    const $io0 = (input: any) => "boolean" === typeof input.value;
    const $io1 = (input: any) => "number" === typeof input.value;
    const $io2 = (input: any) => "string" === typeof input.value;
    const $co0 = (input: any) => ({
        value: input.value
    });
    const $co1 = (input: any) => ({
        value: input.value
    });
    const $co2 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) && (input.length === 3 && ("object" === typeof input[0] && null !== input[0] && $io0(input[0])) && ("object" === typeof input[1] && null !== input[1] && $io1(input[1])) && ("object" === typeof input[2] && null !== input[2] && $io2(input[2]))) ? [
        "object" === typeof input[0] && null !== input[0] ? $co0(input[0]) : input[0],
        "object" === typeof input[1] && null !== input[1] ? $co1(input[1]) : input[1],
        "object" === typeof input[2] && null !== input[2] ? $co2(input[2]) : input[2]
    ] : input;
}; assert(input); const output = clone(input); /* ConstantAtomicWrapper */; return output as ConstantAtomicWrapper; })(input), ConstantAtomicWrapper.SPOILERS);
