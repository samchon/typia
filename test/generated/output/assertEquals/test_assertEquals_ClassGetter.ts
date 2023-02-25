import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_assertEquals_ClassGetter = _test_assertEquals("ClassGetter", ClassGetter.generate, (input) => ((input: any) => {
    const $guard = (typia.assertEquals as any).guard;
    const $join = (typia.assertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is Person => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        })) && (3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["id", "name", "dead"].some(prop => key === prop))
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
            expected: "Resolve<ClassGetter.Person>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Person;
})(input));
