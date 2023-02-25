import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_UltimateUnion = _test_assertClone("UltimateUnion", UltimateUnion.generate, (input: any): typia.Primitive<UltimateUnion> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is UltimateUnion => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as UltimateUnion;
}; const clone = (input: UltimateUnion): typia.Primitive<UltimateUnion> => {
    const $any = (typia.createAssertClone as any).any;
    return $any(input);
}; assert(input); const output = clone(input); /* Array */; return output as UltimateUnion; }, UltimateUnion.SPOILERS);
