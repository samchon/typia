import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is } from "../internal/_test_is";
export const test_is_UltimateUnion = _test_is("UltimateUnion", UltimateUnion.generate, (input) => ((input: any): input is typia.IJsonApplication[] => {
    return Array.isArray(input);
})(input), UltimateUnion.SPOILERS);
