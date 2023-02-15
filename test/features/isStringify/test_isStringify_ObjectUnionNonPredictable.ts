import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectUnionNonPredictable = _test_isStringify(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) => typia.isStringify(input),
    ObjectUnionNonPredictable.SPOILERS,
);
