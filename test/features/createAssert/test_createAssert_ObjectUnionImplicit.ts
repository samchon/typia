import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUnionImplicit = _test_assert(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssert<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
