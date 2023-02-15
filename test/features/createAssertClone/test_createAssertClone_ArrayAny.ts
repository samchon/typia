import typia from "typia";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayAny = _test_assertClone(
    "ArrayAny",
    ArrayAny.generate,
    typia.createAssertClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
