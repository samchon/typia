import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectDescription = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.misc.createAssertPrune<ObjectDescription>((p) => new CustomGuardError(p)));
