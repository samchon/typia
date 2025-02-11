import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectRequired } from "../../structures/ObjectRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectRequired = _test_assert(CustomGuardError)(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.assert<ObjectRequired>(input, (p) => new CustomGuardError(p)));
