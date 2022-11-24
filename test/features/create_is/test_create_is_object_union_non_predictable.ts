import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_union_non_predictable = _test_is(
    "union object",
    ObjectUnionNonPredictable.generate,
    TSON.createIs<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
