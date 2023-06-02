import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_isPrune_ObjectUnionNonPredictable = _test_isPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.isPrune(input),
    ObjectUnionNonPredictable.SPOILERS,
);
