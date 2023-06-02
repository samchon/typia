import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert } from "../../internal/_test_assert";

export const test_createAssert_ObjectGeneric = _test_assert(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssert<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
