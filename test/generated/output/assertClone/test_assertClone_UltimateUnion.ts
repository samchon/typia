import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_UltimateUnion = _test_assertClone("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): typia.Primitive<typia.IJsonApplication[]> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is typia.IJsonApplication[] => {
        return Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<any>",
            value: input
        });
    })(input, "$input", true);
    return input as typia.IJsonApplication[];
}; const clone = (input: typia.IJsonApplication[]): typia.Primitive<typia.IJsonApplication[]> => {
    const $any = (typia.assertClone as any).any;
    return $any(input);
}; assert(input); const output = clone(input); /* Array<__type> */; return output as typia.IJsonApplication[]; })(input), UltimateUnion.SPOILERS);
