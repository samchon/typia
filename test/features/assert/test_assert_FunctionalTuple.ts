import typia from "typia";

import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalTuple = _test_assert(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => typia.assert(input),
    FunctionalTuple.SPOILERS,
);
