import typia from "typia";

import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectUnionImplicit = _test_isPrune(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    typia.createIsPrune<ObjectUnionImplicit>(),
    ObjectUnionImplicit.SPOILERS,
);
