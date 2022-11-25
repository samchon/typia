import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => TSON.assertClone(input),
    UltimateUnion.SPOILERS,
);