import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_createIsClone_ObjectUnionNonPredictable = _test_isClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createIsClone<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
