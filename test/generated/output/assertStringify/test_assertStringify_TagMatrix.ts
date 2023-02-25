import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_TagMatrix = _test_assertStringify("TagMatrix", TagMatrix.generate, (input) => ((input: TagMatrix): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    const $is_uuid = (typia.assertStringify as any).is_uuid;
    ((input: any, _path: string, _exceptionable: boolean): input is TagMatrix => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.matrix) && 3 === input.matrix.length || $guard(_exceptionable, {
            path: _path + ".matrix",
            expected: "Array<Array<string>>",
            value: input.matrix
        })) && input.matrix.every((elem: any, _index1: number) => (Array.isArray(elem) && 3 === elem.length || $guard(_exceptionable, {
            path: _path + ".matrix[" + _index1 + "]",
            expected: "Array<string>",
            value: elem
        })) && elem.every((elem: any, _index2: number) => "string" === typeof elem && true === $is_uuid(elem) || $guard(_exceptionable, {
            path: _path + ".matrix[" + _index1 + "][" + _index2 + "]",
            expected: "string",
            value: elem
        })));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagMatrix>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagMatrix;
}; const stringify = (input: TagMatrix): string => {
    const $string = (typia.assertStringify as any).string;
    const $is_uuid = (typia.assertStringify as any).is_uuid;
    const $so0 = (input: any) => `{"matrix":${`[${input.matrix.map((elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`).join(",")}]`}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), TagMatrix.SPOILERS);
