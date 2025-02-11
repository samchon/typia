import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectUnionNonPredictable = _test_assert(CustomGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((input) => typia.assert<ObjectUnionNonPredictable>(input, (p) => new CustomGuardError(p)));
