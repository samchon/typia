import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_FunctionalTupleUnion = _test_assert("FunctionalTupleUnion", FunctionalTupleUnion.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is FunctionalTupleUnion => {
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[(number | string), (number | string), (number | string), (number | string)]",
            value: input
        })) && ((input.length === 4 || $guard(true, {
            path: _path + "",
            expected: "[(number | string), (number | string), (number | string), (number | string)]",
            value: input
        })) && ((null !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "(number | string)",
            value: input[0]
        })) && (undefined !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "(number | string)",
            value: input[0]
        })) && ("function" === typeof input[0] || "string" === typeof input[0] || "number" === typeof input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "(number | string)",
            value: input[0]
        }))) && ((null !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "(number | string)",
            value: input[1]
        })) && (undefined !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "(number | string)",
            value: input[1]
        })) && ("function" === typeof input[1] || "string" === typeof input[1] || "number" === typeof input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "(number | string)",
            value: input[1]
        }))) && ((null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "(number | string)",
            value: input[2]
        })) && (undefined !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "(number | string)",
            value: input[2]
        })) && ("function" === typeof input[2] || "string" === typeof input[2] || "number" === typeof input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "(number | string)",
            value: input[2]
        }))) && ((null !== input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "(number | string)",
            value: input[3]
        })) && (undefined !== input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "(number | string)",
            value: input[3]
        })) && ("function" === typeof input[3] || "string" === typeof input[3] || "number" === typeof input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "(number | string)",
            value: input[3]
        }))));
    })(input, "$input", true);
    return input as FunctionalTupleUnion;
}, FunctionalTupleUnion.SPOILERS);
