import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_isClone_ObjectUnionNonPredictable = _test_isClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.isClone<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
