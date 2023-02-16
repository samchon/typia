import typia from "typia";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectUnionNonPredictable =
    _test_validateEquals(
        "ObjectUnionNonPredictable",
        ObjectUnionNonPredictable.generate,
        (input) => typia.validateEquals(input),
    );
