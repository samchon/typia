import typia from "typia";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectIntersection = _test_assertPrune(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.assertPrune(input),
    ObjectIntersection.SPOILERS,
);
