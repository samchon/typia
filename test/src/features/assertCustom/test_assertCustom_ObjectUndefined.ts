import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectUndefined = (): void => _test_assert(CustomGuardError)(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.assert<ObjectUndefined>(input, (p) => new CustomGuardError(p)));
