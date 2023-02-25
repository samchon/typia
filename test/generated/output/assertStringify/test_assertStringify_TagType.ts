import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_TagType = _test_assertStringify("TagType", TagType.generate, (input) => ((input: TagType): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagType => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.int && !Number.isNaN(input.int) && parseInt(input.int) === input.int || $guard(_exceptionable, {
            path: _path + ".int",
            expected: "number",
            value: input.int
        })) && ("number" === typeof input.uint && !Number.isNaN(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint || $guard(_exceptionable, {
            path: _path + ".uint",
            expected: "number",
            value: input.uint
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagType.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagType.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagType;
}; const stringify = (input: TagType): string => {
    return `[${input.map((elem: any) => `{"int":${elem.int},"uint":${elem.uint}}`).join(",")}]`;
}; return stringify(assert(input)); })(input), TagType.SPOILERS);
