import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectUnionNonPredictable =
    _test_isStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createIsStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
