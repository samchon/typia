import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectUnionDouble = _test_isPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.isPrune(input),
    ObjectUnionDouble.SPOILERS,
);
