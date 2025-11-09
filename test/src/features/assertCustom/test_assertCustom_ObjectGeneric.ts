import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectGeneric = (): void => _test_assert(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)((input) => typia.assert<ObjectGeneric>(input, (p) => new CustomGuardError(p)));
