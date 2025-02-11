import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectAlias = _test_assert(CustomGuardError)(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)((input) => typia.assert<ObjectAlias>(input, (p) => new CustomGuardError(p)));
