import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assertClone(input),
    UltimateUnion.SPOILERS,
);
