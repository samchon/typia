import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ObjectClosure = _test_assertEquals("ObjectClosure", ObjectClosure.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is IRecord => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && (true || $guard(_exceptionable, {
            path: _path + ".open",
            expected: "unknown",
            value: input.open
        })) && (2 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "open"].some(prop => key === prop))
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
            expected: "Resolve<ObjectClosure.IRecord>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectClosure;
});
