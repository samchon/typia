import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_TagType = _test_assertClone("TagType", TagType.generate, (input: any): typia.Primitive<TagType> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagType => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.int && parseInt(input.int) === input.int || $guard(_exceptionable, {
            path: _path + ".int",
            expected: "number",
            value: input.int
        })) && ("number" === typeof input.uint && parseInt(input.uint) === input.uint && 0 <= input.uint || $guard(_exceptionable, {
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
}; const clone = (input: TagType): typia.Primitive<TagType> => {
    const $co0 = (input: any) => ({
        int: input.int,
        uint: input.uint
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as TagType; }, TagType.SPOILERS);
