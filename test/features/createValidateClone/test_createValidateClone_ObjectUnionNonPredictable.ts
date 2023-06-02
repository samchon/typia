import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ObjectUnionNonPredictable = _test_validateClone(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createValidateClone<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
