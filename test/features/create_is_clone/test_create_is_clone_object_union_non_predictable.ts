import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_union_non_predictable =
    _test_is_clone(
        "union object",
        ObjectUnionNonPredictable.generate,
        TSON.createIsClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
