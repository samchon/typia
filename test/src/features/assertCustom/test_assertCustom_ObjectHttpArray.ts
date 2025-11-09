import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectHttpArray = (): void => _test_assert(CustomGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.assert<ObjectHttpArray>(input, (p) => new CustomGuardError(p)));
