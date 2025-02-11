import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectInternal = _test_assert(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.assert<ObjectInternal>(input, (p) => new CustomGuardError(p)));
