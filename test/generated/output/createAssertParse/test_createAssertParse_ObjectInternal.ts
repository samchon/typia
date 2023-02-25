import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_createAssertParse_ObjectInternal = _test_assertParse("ObjectInternal", ObjectInternal.generate, (input: string): typia.Primitive<ObjectInternal> => { const assert = (input: any) => {
    const $guard = (typia.createAssertParse as any).guard;
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
}; input = JSON.parse(input); return assert(input); }, ObjectInternal.SPOILERS);
