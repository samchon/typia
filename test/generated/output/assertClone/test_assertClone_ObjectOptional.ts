import typia from "../../../../src";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_assertClone_ObjectOptional = _test_assertClone("ObjectOptional", ObjectOptional.generate, (input) => ((input: any): typia.Primitive<ObjectOptional> => { const assert = (input: any): ObjectOptional => {
    const __is = (input: any): input is ObjectOptional => {
        const $io0 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence));
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectOptional => {
            const $guard = (typia.assertClone as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => (undefined === input.id || "string" === typeof input.id || $guard(_exceptionable, {
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
            })) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence) || $guard(_exceptionable, {
                path: _path + ".sequence",
                expected: "(number | undefined)",
                value: input.sequence
            }));
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        email: input.email as any,
        sequence: input.sequence as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input), ObjectOptional.SPOILERS);
