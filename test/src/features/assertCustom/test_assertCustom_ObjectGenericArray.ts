import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectGenericArray = _test_assert(CustomGuardError)(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.assert<ObjectGenericArray>(input, (p) => new CustomGuardError(p)));
