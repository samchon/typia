import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ToJsonNull = _test_assertClone("ToJsonNull", ToJsonNull.generate, (input) => ((input: any): typia.Primitive<ToJsonNull> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ToJsonNull => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true || $guard(_exceptionable, {
            path: _path + ".toJSON",
            expected: "unknown",
            value: input.toJSON
        });
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ToJsonNull>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ToJsonNull;
}; const clone = (input: ToJsonNull): typia.Primitive<ToJsonNull> => {
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? input.toJSON() : input;
}; assert(input); const output = clone(input); /* ToJsonNull */; return output as ToJsonNull; })(input));
