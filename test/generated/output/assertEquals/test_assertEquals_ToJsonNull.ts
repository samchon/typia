import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ToJsonNull = _test_assertEquals("ToJsonNull", ToJsonNull.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonNull => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["toJSON"].some(prop => key === prop))
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
            expected: "Resolve<ToJsonNull>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ToJsonNull;
})(input));
