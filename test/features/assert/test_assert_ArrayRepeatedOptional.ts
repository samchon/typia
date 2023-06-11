import typia from "../../../src";

import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ArrayRepeatedOptional = _test_assert(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input) => typia.assert(input),
    ArrayRepeatedOptional.SPOILERS,
);
