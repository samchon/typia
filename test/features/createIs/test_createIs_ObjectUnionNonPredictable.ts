import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createIs_ObjectUnionNonPredictable = _test_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createIs<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
