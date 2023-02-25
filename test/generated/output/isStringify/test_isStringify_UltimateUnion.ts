import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_UltimateUnion = _test_isStringify("UltimateUnion", UltimateUnion.generate, (input) => ((input: typia.IJsonApplication[]): string | null => { const is = (input: any): input is typia.IJsonApplication[] => {
    return Array.isArray(input);
}; const stringify = (input: typia.IJsonApplication[]): string => {
    return JSON.stringify(input);
}; return is(input) ? stringify(input) : null; })(input), UltimateUnion.SPOILERS);
