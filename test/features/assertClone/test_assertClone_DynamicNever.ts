import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_DynamicNever = _test_assertClone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.assertClone(input),
    DynamicNever.SPOILERS,
);
