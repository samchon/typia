import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ClassClosure = _test_assertEquals("ClassClosure", ClassClosure.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is Something => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("something" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"something\"",
            value: input.type
        })) && (true || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "unknown",
            value: input.closure
        })) && (3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "type", "closure"].some(prop => key === prop))
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
            expected: "Resolve<ClassClosure.Something>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ClassClosure;
});
