import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectInternal = _test_assertStringify("ObjectInternal", ObjectInternal.generate, (input: ObjectInternal): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
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
}; const stringify = (input: ObjectInternal): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)}}`;
}; return stringify(assert(input)); }, ObjectInternal.SPOILERS);
