import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_ObjectOptional = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.misc.createAssertPrune<ObjectOptional>((p) => new CustomGuardError(p)));
