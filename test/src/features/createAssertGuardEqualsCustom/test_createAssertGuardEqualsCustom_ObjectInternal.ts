import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectInternal = _test_assertGuardEquals(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createAssertGuardEquals<ObjectInternal>((p) => new CustomGuardError(p)));
