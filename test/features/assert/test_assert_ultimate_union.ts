import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ultimate_union = _test_assert(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.assert(input),
    UltimateUnion.SPOILERS,
);
