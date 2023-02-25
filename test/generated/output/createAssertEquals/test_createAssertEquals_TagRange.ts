import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_TagRange = _test_assertEquals("TagRange", TagRange.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is TagRange => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.greater && 3 < input.greater || $guard(_exceptionable, {
            path: _path + ".greater",
            expected: "number",
            value: input.greater
        })) && ("number" === typeof input.greater_equal && 3 <= input.greater_equal || $guard(_exceptionable, {
            path: _path + ".greater_equal",
            expected: "number",
            value: input.greater_equal
        })) && ("number" === typeof input.less && 7 > input.less || $guard(_exceptionable, {
            path: _path + ".less",
            expected: "number",
            value: input.less
        })) && ("number" === typeof input.less_equal && 7 >= input.less_equal || $guard(_exceptionable, {
            path: _path + ".less_equal",
            expected: "number",
            value: input.less_equal
        })) && ("number" === typeof input.greater_less && 3 < input.greater_less && 7 > input.greater_less || $guard(_exceptionable, {
            path: _path + ".greater_less",
            expected: "number",
            value: input.greater_less
        })) && ("number" === typeof input.greater_equal_less && 3 <= input.greater_equal_less && 7 > input.greater_equal_less || $guard(_exceptionable, {
            path: _path + ".greater_equal_less",
            expected: "number",
            value: input.greater_equal_less
        })) && ("number" === typeof input.greater_less_equal && 3 < input.greater_less_equal && 7 >= input.greater_less_equal || $guard(_exceptionable, {
            path: _path + ".greater_less_equal",
            expected: "number",
            value: input.greater_less_equal
        })) && ("number" === typeof input.greater_equal_less_equal && 3 <= input.greater_equal_less_equal && 7 >= input.greater_equal_less_equal || $guard(_exceptionable, {
            path: _path + ".greater_equal_less_equal",
            expected: "number",
            value: input.greater_equal_less_equal
        })) && (8 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["greater", "greater_equal", "less", "less_equal", "greater_less", "greater_equal_less", "greater_less_equal", "greater_equal_less_equal"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagRange.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagRange.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagRange;
});
