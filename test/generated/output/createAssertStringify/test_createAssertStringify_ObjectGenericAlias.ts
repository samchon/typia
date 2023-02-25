import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_createAssertStringify_ObjectGenericAlias = _test_assertStringify("ObjectGenericAlias", ObjectGenericAlias.generate, (input: Alias): string => { const assert = (input: any) => {
    const $guard = (typia.createAssertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Alias => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => "string" === typeof input.value || $guard(_exceptionable, {
            path: _path + ".value",
            expected: "string",
            value: input.value
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Alias;
}; const stringify = (input: Alias): string => {
    const $string = (typia.createAssertStringify as any).string;
    return `{"value":${$string(input.value)}}`;
}; return stringify(assert(input)); }, ObjectGenericAlias.SPOILERS);
