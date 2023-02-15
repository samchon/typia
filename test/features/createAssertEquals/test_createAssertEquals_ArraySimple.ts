import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ArraySimple = _test_assertEquals(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertEquals<ArraySimple>(),
);
