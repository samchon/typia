import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ObjectGenericAlias = _test_assertClone("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): typia.Primitive<Alias> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
}; const clone = (input: Alias): typia.Primitive<Alias> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectGenericAlias.ISomething */; return output as Alias; }, ObjectGenericAlias.SPOILERS);
