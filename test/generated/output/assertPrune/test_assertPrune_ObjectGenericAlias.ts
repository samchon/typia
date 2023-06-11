import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
export const test_assertPrune_ObjectGenericAlias = _test_assertPrune("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): ObjectGenericAlias.ISomething<string> => { const assert = (input: any): ObjectGenericAlias.ISomething<string> => {
    const __is = (input: any): input is ObjectGenericAlias.ISomething<string> => {
        return "object" === typeof input && null !== input && "string" === typeof (input as any).value;
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectGenericAlias.ISomething<string> => {
            const $guard = (typia.assertPrune as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => "string" === typeof input.value || $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            });
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const prune = (input: ObjectGenericAlias.ISomething<string>): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectGenericAlias.SPOILERS);
