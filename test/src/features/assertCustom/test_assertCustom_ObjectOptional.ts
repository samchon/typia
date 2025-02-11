import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectOptional = _test_assert(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.assert<ObjectOptional>(input, (p) => new CustomGuardError(p)));
