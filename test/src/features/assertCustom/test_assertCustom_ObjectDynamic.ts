import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectDynamic = (): void => _test_assert(CustomGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.assert<ObjectDynamic>(input, (p) => new CustomGuardError(p)));
