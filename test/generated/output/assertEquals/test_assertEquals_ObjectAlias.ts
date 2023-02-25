import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ObjectAlias = _test_assertEquals("ObjectAlias", ObjectAlias.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectAlias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && (1 === input.sex || 2 === input.sex || "male" === input.sex || "female" === input.sex || $guard(_exceptionable, {
            path: _path + ".sex",
            expected: "(\"female\" | \"male\" | 1 | 2)",
            value: input.sex
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        })) && (6 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "email", "name", "sex", "age", "dead"].some(prop => key === prop))
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
            expected: "Array<Resolve<ObjectAlias.IMember>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ObjectAlias.IMember>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ObjectAlias;
})(input));
