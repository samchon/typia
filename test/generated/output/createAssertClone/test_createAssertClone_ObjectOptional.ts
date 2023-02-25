import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectOptional = _test_assertClone("ObjectOptional", ObjectOptional.generate, (input: any): typia.Primitive<ObjectOptional> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
        }));
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectOptional>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectOptional;
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        email: input.email,
        sequence: input.sequence
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectOptional */; return output as ObjectOptional; }, ObjectOptional.SPOILERS);
