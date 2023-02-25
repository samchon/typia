import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_UltimateUnion = _test_clone("UltimateUnion", UltimateUnion.generate, (input) => ((input: typia.IJsonApplication[]): typia.Primitive<typia.IJsonApplication[]> => {
    const $any = (typia.clone as any).any;
    return $any(input);
})(input));
