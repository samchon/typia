import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectGenericUnion = _test_assert(CustomGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.assert<ObjectGenericUnion>(input, (p) => new CustomGuardError(p)));
