import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_object_union_non_predictable =
    _test_assert_clone(
        "union object",
        ObjectUnionNonPredictable.generate,
        TSON.createAssertClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
