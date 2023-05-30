import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_assertStringify_ArrayAtomicSimple = _test_assertStringify("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input) => ((input: any): string => { const assert = (input: any): [Array<boolean>, Array<number>, Array<string>] => {
    const $guard = (typia.assertStringify as any).guard;
    const __is = (input: any): input is [Array<boolean>, Array<number>, Array<string>] => {
        return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem && Number.isFinite(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is [Array<boolean>, Array<number>, Array<string>] => {
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
            })) && input[1].every((elem: any, _index2: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(true, {
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
    return input;
}; const stringify = (input: [Array<boolean>, Array<number>, Array<string>]): string => {
    const $number = (typia.assertStringify as any).number;
    const $string = (typia.assertStringify as any).string;
    return `[${`[${input[0].map((elem: any) => elem).join(",")}]`},${`[${input[1].map((elem: any) => $number(elem)).join(",")}]`},${`[${input[2].map((elem: any) => $string(elem)).join(",")}]`}]`;
}; return stringify(assert(input)); })(input), ArrayAtomicSimple.SPOILERS);
