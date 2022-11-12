import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_union_non_predictable = _test_is_clone(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.isClone(input),
    ObjectUnionNonPredictable.SPOILERS,
);
