import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectUnionNonPredictable = (): void => _test_assert(TypeGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)(typia.createAssert<ObjectUnionNonPredictable>());
