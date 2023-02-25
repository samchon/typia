import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_FunctionalValueUnion = _test_assert("FunctionalValueUnion", FunctionalValueUnion.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalValueUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(number | string)>",
            value: input
        })) && input.every((elem: any, _index1: number) => (null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && (undefined !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })) && ("function" === typeof elem || "string" === typeof elem || "number" === typeof elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(number | string)",
            value: elem
        })));
    })(input, "$input", true);
    return input as FunctionalValueUnion;
}, FunctionalValueUnion.SPOILERS);
