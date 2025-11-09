import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHttpArray = (): void => _test_assert(CustomGuardError)(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)(typia.createAssert<ObjectHttpArray>((p) => new CustomGuardError(p)));
