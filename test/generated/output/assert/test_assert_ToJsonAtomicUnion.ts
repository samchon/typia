import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_ToJsonAtomicUnion = _test_assert("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonAtomicUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ToJsonAtomicUnion.IToJson>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ToJsonAtomicUnion.IToJson>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ToJsonAtomicUnion;
})(input));
