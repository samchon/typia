import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_UltimateUnion = _test_isParse("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): typia.Primitive<UltimateUnion> => { const is = (input: any): input is UltimateUnion => {
    return Array.isArray(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), UltimateUnion.SPOILERS);
