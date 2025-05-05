import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_compare_equals_ObjectUnionNonPredictable = _test_compare_equals(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((a, b) => typia.compare.equals<ObjectUnionNonPredictable>(a, b));
