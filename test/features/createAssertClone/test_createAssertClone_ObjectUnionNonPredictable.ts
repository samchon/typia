import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionNonPredictable =
    _test_assertClone(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        typia.createAssertClone<ObjectUnionNonPredictable>(),
        ObjectUnionNonPredictable.SPOILERS,
    );
