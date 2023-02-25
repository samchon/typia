import typia from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ObjectIntersection = _test_assertClone("ObjectIntersection", ObjectIntersection.generate, (input) => ((input: any): typia.Primitive<ObjectIntersection> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectIntersection => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("boolean" === typeof input.vulnerable || $guard(_exceptionable, {
            path: _path + ".vulnerable",
            expected: "boolean",
            value: input.vulnerable
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectIntersection>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectIntersection;
}; const clone = (input: ObjectIntersection): typia.Primitive<ObjectIntersection> => {
    const $co0 = (input: any) => ({
        email: input.email,
        name: input.name,
        vulnerable: input.vulnerable
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectIntersection */; return output as ObjectIntersection; })(input), ObjectIntersection.SPOILERS);
