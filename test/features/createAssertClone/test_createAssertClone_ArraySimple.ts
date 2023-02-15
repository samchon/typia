import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArraySimple = _test_assertClone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
