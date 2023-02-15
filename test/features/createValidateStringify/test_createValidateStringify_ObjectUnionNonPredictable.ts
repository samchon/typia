import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectUnionNonPredictable =
    _test_validateStringify(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createValidateStringify<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
