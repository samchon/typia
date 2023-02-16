import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectGenericUnion = _test_isPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createIsPrune<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
