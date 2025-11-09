import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_assert_ObjectUnionNonPredictable = (): void => _test_assert(TypeGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((input) => typia.assert<ObjectUnionNonPredictable>(input));
