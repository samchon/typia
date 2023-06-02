import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_ObjectUnionNonPredictable = _test_isParse(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createIsParse<ObjectUnionNonPredictable>(),
    ObjectUnionNonPredictable.SPOILERS,
);
