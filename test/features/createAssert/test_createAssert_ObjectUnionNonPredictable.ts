import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assert_ObjectUnionNonPredictable = _test_assert(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createAssert<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
