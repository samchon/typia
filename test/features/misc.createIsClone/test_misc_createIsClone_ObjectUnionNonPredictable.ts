import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_misc_isClone_ObjectUnionNonPredictable = _test_misc_isClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.misc.createIsClone<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
