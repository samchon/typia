import typia from "typia";

import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assertClone(input),
    UltimateUnion.SPOILERS,
);
