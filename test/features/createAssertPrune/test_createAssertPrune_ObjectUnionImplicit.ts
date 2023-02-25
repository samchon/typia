import typia from "../../../src";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUnionImplicit = _test_assertPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createAssertPrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
