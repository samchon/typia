import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionNonPredictable = _test_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    TSON.createIs<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);