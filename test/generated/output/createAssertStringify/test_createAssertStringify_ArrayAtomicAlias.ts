import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ArrayAtomicAlias = _test_assertStringify("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input: ArrayAtomicAlias): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayAtomicAlias => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Array<boolean>, Array<number>, Array<string>]",
            value: input
        })) && ((input.length === 3 || $guard(true, {
            path: _path + "",
            expected: "[Array<boolean>, Array<number>, Array<string>]",
            value: input
        })) && ((Array.isArray(input[0]) || $guard(true, {
            path: _path + "[0]",
            expected: "Array<boolean>",
            value: input[0]
        })) && input[0].every((elem: any, _index1: number) => "boolean" === typeof elem || $guard(true, {
            path: _path + "[0][" + _index1 + "]",
            expected: "boolean",
            value: elem
        }))) && ((Array.isArray(input[1]) || $guard(true, {
            path: _path + "[1]",
            expected: "Array<number>",
            value: input[1]
        })) && input[1].every((elem: any, _index2: number) => "number" === typeof elem && !Number.isNaN(elem) || $guard(true, {
            path: _path + "[1][" + _index2 + "]",
            expected: "number",
            value: elem
        }))) && ((Array.isArray(input[2]) || $guard(true, {
            path: _path + "[2]",
            expected: "Array<string>",
            value: input[2]
        })) && input[2].every((elem: any, _index3: number) => "string" === typeof elem || $guard(true, {
            path: _path + "[2][" + _index3 + "]",
            expected: "string",
            value: elem
        }))));
    })(input, "$input", true);
    return input as ArrayAtomicAlias;
}; const stringify = (input: ArrayAtomicAlias): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => elem).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
}; return stringify(assert(input)); }, ArrayAtomicAlias.SPOILERS);
