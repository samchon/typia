import typia from "../../../src";

import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ArrayRepeatedOptional = _test_assert(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    typia.createAssert<ArrayRepeatedOptional>(),
    ArrayRepeatedOptional.SPOILERS,
);
