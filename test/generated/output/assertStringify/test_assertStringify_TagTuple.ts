import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_TagTuple = _test_assertStringify("TagTuple", TagTuple.generate, (input) => ((input: TagTuple): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagTuple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.tuple) || $guard(_exceptionable, {
            path: _path + ".tuple",
            expected: "[string, number, Array<string>, Array<number>]",
            value: input.tuple
        })) && ((input.tuple.length === 4 || $guard(_exceptionable, {
            path: _path + ".tuple",
            expected: "[string, number, Array<string>, Array<number>]",
            value: input.tuple
        })) && ("string" === typeof input.tuple[0] && 3 <= input.tuple[0].length && 7 >= input.tuple[0].length || $guard(_exceptionable, {
            path: _path + ".tuple[0]",
            expected: "string",
            value: input.tuple[0]
        })) && ("number" === typeof input.tuple[1] && 3 <= input.tuple[1] && 7 >= input.tuple[1] || $guard(_exceptionable, {
            path: _path + ".tuple[1]",
            expected: "number",
            value: input.tuple[1]
        })) && ((Array.isArray(input.tuple[2]) && (3 <= input.tuple[2].length && 7 >= input.tuple[2].length) || $guard(_exceptionable, {
            path: _path + ".tuple[2]",
            expected: "Array<string>",
            value: input.tuple[2]
        })) && input.tuple[2].every((elem: any, _index1: number) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length || $guard(_exceptionable, {
            path: _path + ".tuple[2][" + _index1 + "]",
            expected: "string",
            value: elem
        }))) && ((Array.isArray(input.tuple[3]) && (3 <= input.tuple[3].length && 7 >= input.tuple[3].length) || $guard(_exceptionable, {
            path: _path + ".tuple[3]",
            expected: "Array<number>",
            value: input.tuple[3]
        })) && input.tuple[3].every((elem: any, _index2: number) => "number" === typeof elem && 3 <= elem && 7 >= elem || $guard(_exceptionable, {
            path: _path + ".tuple[3][" + _index2 + "]",
            expected: "number",
            value: elem
        }))));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagTuple>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagTuple;
}; const stringify = (input: TagTuple): string => {
    const $string = (typia.assertStringify as any).string;
    const $so0 = (input: any) => `{"tuple":${`[${$string(input.tuple[0])},${input.tuple[1]},${`[${input.tuple[2].map((elem: any) => $string(elem)).join(",")}]`},${`[${input.tuple[3].map((elem: any) => elem).join(",")}]`}]`}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), TagTuple.SPOILERS);
