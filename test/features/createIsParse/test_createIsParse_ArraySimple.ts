import typia from "typia";

import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArraySimple = _test_isParse(
    "ArraySimple",
    ArraySimple.generate,
    typia.createIsParse<ArraySimple>(),
    ArraySimple.SPOILERS,
);
