import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectInternal = (): void => _test_assert(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createAssert<ObjectInternal>((p) => new CustomGuardError(p)));
