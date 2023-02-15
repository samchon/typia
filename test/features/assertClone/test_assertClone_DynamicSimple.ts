import typia from "typia";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicSimple = _test_assertClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assertClone(input),
    DynamicSimple.SPOILERS,
);
