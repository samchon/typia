import TSON from "../../../src";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectUnionNonPredictable = _test_clone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    TSON.createClone<ObjectUnionNonPredictable>(),
);