import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectInternal = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)(typia.createAssertGuard<ObjectInternal>((p) => new CustomGuardError(p)));
