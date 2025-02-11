import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectDescription = _test_assertGuard(CustomGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.createAssertGuard<ObjectDescription>((p) => new CustomGuardError(p)));
