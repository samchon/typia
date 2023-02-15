import typia from "typia";

import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUnionExplicit = _test_assertPrune(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.createAssertPrune<ObjectUnionExplicit>(),
    ObjectUnionExplicit.SPOILERS,
);
