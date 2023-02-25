import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isParse } from "../internal/_test_isParse";
export const test_createIsParse_UltimateUnion = _test_isParse("UltimateUnion", UltimateUnion.generate, (input: any): typia.Primitive<UltimateUnion> => { const is = (input: any): input is UltimateUnion => {
    return Array.isArray(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, UltimateUnion.SPOILERS);
