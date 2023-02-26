import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_UltimateUnion = _test_assert(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assert(input),
    UltimateUnion.SPOILERS,
);
