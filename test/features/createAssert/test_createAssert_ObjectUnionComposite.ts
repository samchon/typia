import typia from "typia";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUnionComposite = _test_assert(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createAssert<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
