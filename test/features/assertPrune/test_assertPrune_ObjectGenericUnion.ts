import typia from "typia";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectGenericUnion = _test_assertPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertPrune(input),
    ObjectGenericUnion.SPOILERS,
);
