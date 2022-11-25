import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is } from "../internal/_test_is";

export const test_is_object_union_non_predictable = _test_is(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.is(input),
    ObjectUnionNonPredictable.SPOILERS,
);
