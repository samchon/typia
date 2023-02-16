import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectUnionNonPredictable = _test_equals(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.equals(input),
);
