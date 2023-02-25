import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_UltimateUnion = _test_stringify("UltimateUnion", UltimateUnion.generate, (input) => ((input: typia.IJsonApplication[]): string => {
    return JSON.stringify(input);
})(input));
