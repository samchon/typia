import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectUnionNonPredictable = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable
)((input) => typia.assertGuard<ObjectUnionNonPredictable>(input, (p) => new CustomGuardError(p)));
