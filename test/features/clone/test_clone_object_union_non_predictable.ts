import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_clone } from "./_test_clone";

export const test_clone_object_union_non_predictable = _test_clone(
    "union object",
    ObjectUnionNonPredictable.generate,
    (input) => TSON.clone(input),
);
