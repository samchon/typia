import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ToJsonArray = _test_assertEquals("ToJsonArray", ToJsonArray.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonArray => {
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
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => (true || $guard(_exceptionable, {
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
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => (true || $guard(_exceptionable, {
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
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => (true || $guard(_exceptionable, {
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
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
            value: input
        })) && ((input.length === 4 || $guard(true, {
            path: _path + "",
            expected: "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
            value: input
        })) && (("object" === typeof input[0] && null !== input[0] || $guard(true, {
            path: _path + "[0]",
            expected: "Resolve<ToJsonArray.IArray<boolean>>",
            value: input[0]
        })) && $ao0(input[0], _path + "[0]", true)) && (("object" === typeof input[1] && null !== input[1] || $guard(true, {
            path: _path + "[1]",
            expected: "Resolve<ToJsonArray.IArray<number>>",
            value: input[1]
        })) && $ao1(input[1], _path + "[1]", true)) && (("object" === typeof input[2] && null !== input[2] || $guard(true, {
            path: _path + "[2]",
            expected: "Resolve<ToJsonArray.IArray<string>>",
            value: input[2]
        })) && $ao2(input[2], _path + "[2]", true)) && (("object" === typeof input[3] && null !== input[3] || $guard(true, {
            path: _path + "[3]",
            expected: "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
            value: input[3]
        })) && $ao3(input[3], _path + "[3]", true)));
    })(input, "$input", true);
    return input as ToJsonArray;
})(input));
