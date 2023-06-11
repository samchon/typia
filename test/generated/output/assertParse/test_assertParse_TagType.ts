import typia from "../../../../src";
import { TagType } from "../../../structures/TagType";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_assertParse_TagType = _test_assertParse("TagType", TagType.generate, (input) => ((input: string): typia.Primitive<TagType> => { const assert = (input: any): TagType => {
    const __is = (input: any): input is TagType => {
        const $io0 = (input: any): boolean => "number" === typeof input.int && Number.isFinite(input.int) && parseInt(input.int) === input.int && ("number" === typeof input.uint && Number.isFinite(input.uint) && parseInt(input.uint) === input.uint && 0 <= input.uint);
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagType => {
            const $guard = (typia.assertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.int && Number.isFinite(input.int) && (parseInt(input.int) === input.int || $guard(_exceptionable, {
                path: _path + ".int",
                expected: "number (@type int)",
                value: input.int
            })) || $guard(_exceptionable, {
                path: _path + ".int",
                expected: "number",
                value: input.int
            })) && ("number" === typeof input.uint && Number.isFinite(input.uint) && (parseInt(input.uint) === input.uint || $guard(_exceptionable, {
                path: _path + ".uint",
                expected: "number (@type uint)",
                value: input.uint
            })) && (0 <= input.uint || $guard(_exceptionable, {
                path: _path + ".uint",
                expected: "number (@type uint)",
                value: input.uint
            })) || $guard(_exceptionable, {
                path: _path + ".uint",
                expected: "number",
                value: input.uint
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "TagType",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagType.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagType.Type",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "TagType",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(input), TagType.SPOILERS);
