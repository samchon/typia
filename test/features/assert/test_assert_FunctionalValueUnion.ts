import typia from "../../../src";

import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_FunctionalValueUnion = _test_assert(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.assert(input),
    FunctionalValueUnion.SPOILERS,
);
