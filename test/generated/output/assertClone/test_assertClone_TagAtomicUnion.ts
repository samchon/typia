import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_TagAtomicUnion = _test_assertClone("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: any): typia.Primitive<TagAtomicUnion> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && 3 <= input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(number | string)",
            value: input.value
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagAtomicUnion.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagAtomicUnion.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagAtomicUnion;
}; const clone = (input: TagAtomicUnion): typia.Primitive<TagAtomicUnion> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as TagAtomicUnion; })(input), TagAtomicUnion.SPOILERS);
