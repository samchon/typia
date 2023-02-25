import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ToJsonDouble = _test_assertClone("ToJsonDouble", ToJsonDouble.generate, (input) => ((input: any): typia.Primitive<Parent> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Parent => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => true;
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Parent;
}; const clone = (input: Parent): typia.Primitive<Parent> => {
    const $co0 = (input: any) => ({
        id: input.id,
        flag: input.flag
    });
    return "object" === typeof input && null !== input && "function" === typeof input.toJSON ? "object" === typeof input.toJSON() && null !== input.toJSON() ? $co0(input.toJSON()) : input.toJSON() : input;
}; assert(input); const output = clone(input); /* ToJsonDouble.Parent */; return output as Parent; })(input));
