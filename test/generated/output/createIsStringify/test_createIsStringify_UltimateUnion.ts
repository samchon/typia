import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_UltimateUnion = _test_isStringify("UltimateUnion", UltimateUnion.generate, (input: UltimateUnion): string | null => { const is = (input: any): input is UltimateUnion => {
    return Array.isArray(input);
}; const stringify = (input: UltimateUnion): string => {
    return JSON.stringify(input);
}; return is(input) ? stringify(input) : null; }, UltimateUnion.SPOILERS);
