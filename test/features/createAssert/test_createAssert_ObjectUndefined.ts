import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUndefined = _test_assert(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createAssert<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
