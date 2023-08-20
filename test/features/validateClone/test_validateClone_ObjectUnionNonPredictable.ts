import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_validateClone_ObjectUnionNonPredictable = _test_validateClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.validateClone<ObjectUnionNonPredictable>(input),
    ObjectUnionNonPredictable.SPOILERS,
);
