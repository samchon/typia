import typia from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectUnionNonPredictable = _test_assert(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createAssert<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
