import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ObjectOptional = _test_assertEquals("ObjectOptional", ObjectOptional.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectOptional => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (undefined === input.id || "string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "(string | undefined)",
            value: input.id
        })) && (undefined === input.name || "string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "(string | undefined)",
            value: input.name
        })) && (undefined === input.email || "string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "(string | undefined)",
            value: input.email
        })) && (undefined === input.sequence || "number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "(number | undefined)",
            value: input.sequence
        })) && (0 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "name", "email", "sequence"].some(prop => key === prop))
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
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectOptional;
})(input));
