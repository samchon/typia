import typia from "../../../src";
import { TagNaN } from "../../structures/TagNaN";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_TagNaN = _test_assert("TagNaN", TagNaN.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is TagNaN => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "number",
            value: input.value
        })) && ("number" === typeof input.ranged && 0 <= input.ranged && 100 >= input.ranged || $guard(_exceptionable, {
            path: _path + ".ranged",
            expected: "number",
            value: input.ranged
        })) && ("number" === typeof input.minimum && 0 <= input.minimum || $guard(_exceptionable, {
            path: _path + ".minimum",
            expected: "number",
            value: input.minimum
        })) && ("number" === typeof input.maximum && 100 >= input.maximum || $guard(_exceptionable, {
            path: _path + ".maximum",
            expected: "number",
            value: input.maximum
        })) && ("number" === typeof input.multipleOf && 0 === input.multipleOf % 3 || $guard(_exceptionable, {
            path: _path + ".multipleOf",
            expected: "number",
            value: input.multipleOf
        })) && ("number" === typeof input.typed && parseInt(input.typed) === input.typed || $guard(_exceptionable, {
            path: _path + ".typed",
            expected: "number",
            value: input.typed
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagNaN>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagNaN;
}, TagNaN.SPOILERS);
