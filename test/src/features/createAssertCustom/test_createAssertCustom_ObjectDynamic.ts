import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectDynamic = _test_assert(CustomGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.createAssert<ObjectDynamic>((p) => new CustomGuardError(p)));
