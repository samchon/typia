import typia from "../../../src";
import { TagInfinite } from "../../structures/TagInfinite";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_TagInfinite = _test_assertEquals("TagInfinite", TagInfinite.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is TagInfinite => {
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
        })) && (6 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value", "ranged", "minimum", "maximum", "multipleOf", "typed"].some(prop => key === prop))
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
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<TagInfinite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as TagInfinite;
});
