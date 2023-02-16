import typia from "typia";

import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectNullable = _test_assert(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createAssert<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
