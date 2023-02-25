import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectGenericArray = _test_assert(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssert<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
