import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_isClone_UltimateUnion = _test_isClone("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): typia.Primitive<typia.IJsonApplication[]> | null => { const is = (input: any): input is typia.IJsonApplication[] => {
    return Array.isArray(input);
}; const clone = (input: typia.IJsonApplication[]): typia.Primitive<typia.IJsonApplication[]> => {
    const $any = (typia.isClone as any).any;
    return $any(input);
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), UltimateUnion.SPOILERS);
