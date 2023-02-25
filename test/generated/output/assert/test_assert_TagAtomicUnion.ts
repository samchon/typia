import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_TagAtomicUnion = _test_assert("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
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
})(input), TagAtomicUnion.SPOILERS);
