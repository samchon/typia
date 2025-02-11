import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectPartialAndRequired = _test_assert(CustomGuardError)(
    "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(
    ObjectPartialAndRequired
)((input) => typia.assert<ObjectPartialAndRequired>(input, (p) => new CustomGuardError(p)));
