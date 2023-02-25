import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_UltimateUnion = _test_isClone("UltimateUnion", UltimateUnion.generate, (input: any): typia.Primitive<UltimateUnion> | null => { const is = (input: any): input is UltimateUnion => {
    return Array.isArray(input);
}; const clone = (input: UltimateUnion): typia.Primitive<UltimateUnion> => {
    const $any = (typia.createIsClone as any).any;
    return $any(input);
}; if (!is(input))
    return null; const output = clone(input); return output; }, UltimateUnion.SPOILERS);
