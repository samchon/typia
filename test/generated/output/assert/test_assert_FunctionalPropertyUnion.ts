import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_FunctionalPropertyUnion = _test_assert("FunctionalPropertyUnion", FunctionalPropertyUnion.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalPropertyUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ((null !== input.closure || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "(number | string)",
            value: input.closure
        })) && (undefined !== input.closure || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "(number | string)",
            value: input.closure
        })) && ("function" === typeof input.closure || "string" === typeof input.closure || "number" === typeof input.closure || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "(number | string)",
            value: input.closure
        })));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<FunctionalPropertyUnion.IUnion>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<FunctionalPropertyUnion.IUnion>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as FunctionalPropertyUnion;
})(input), FunctionalPropertyUnion.SPOILERS);
