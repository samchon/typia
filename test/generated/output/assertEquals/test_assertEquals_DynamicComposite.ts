import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_DynamicComposite = _test_assertEquals("DynamicComposite", DynamicComposite.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicComposite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "name"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            if (RegExp(/^-?\d+\.?\d*$/).test(key))
                return "number" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "number",
                    value: value
                });
            if (RegExp(/^(prefix_(.*))/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/((.*)_postfix)$/).test(key))
                return "string" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "string",
                    value: value
                });
            if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                return "string" === typeof value || "number" === typeof value || "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "(boolean | number | string)",
                    value: value
                });
            if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                return "boolean" === typeof value || $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "boolean",
                    value: value
                });
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<DynamicComposite>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as DynamicComposite;
})(input));
