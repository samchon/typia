import typia from "../../../src";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ToJsonUndefined = _test_assertEquals("ToJsonUndefined", ToJsonUndefined.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonUndefined => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => 0 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        }));
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ToJsonUndefined>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ToJsonUndefined;
})(input));
