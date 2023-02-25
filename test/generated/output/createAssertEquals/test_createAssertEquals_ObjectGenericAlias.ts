import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ObjectGenericAlias = _test_assertEquals("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is Alias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        })) && (1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
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
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectGenericAlias;
});
