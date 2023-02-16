import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectUnionDouble = _test_assertPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertPrune(input),
    ObjectUnionDouble.SPOILERS,
);
