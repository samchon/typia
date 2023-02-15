import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ArraySimple = _test_assertPrune(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertPrune<ArraySimple>(),
    ArraySimple.SPOILERS,
);
