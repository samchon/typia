import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectInternal = _test_assertClone("ObjectInternal", ObjectInternal.generate, (input: any): typia.Primitive<ObjectInternal> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectInternal => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectInternal>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectInternal;
}; const clone = (input: ObjectInternal): typia.Primitive<ObjectInternal> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectInternal */; return output as ObjectInternal; }, ObjectInternal.SPOILERS);
