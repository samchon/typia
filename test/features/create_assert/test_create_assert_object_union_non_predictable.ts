import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_union_non_predictable = _test_assert(
    "union object",
    ObjectUnionNonPredictable.generate,
    TSON.createAssert<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
