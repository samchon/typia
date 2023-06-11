import typia from "../../../src";

import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_ObjectUnionNonPredictable = _test_equals(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    typia.createEquals<ObjectUnionNonPredictable>(),
);
