import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_assertClone_ObjectUnionNonPredictable = _test_assertClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.assertClone<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
