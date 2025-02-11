import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectOptional = _test_assertGuard(CustomGuardError)(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.createAssertGuard<ObjectOptional>((p) => new CustomGuardError(p)));
