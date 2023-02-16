import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectGenericUnion = _test_isPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isPrune(input),
    ObjectGenericUnion.SPOILERS,
);
