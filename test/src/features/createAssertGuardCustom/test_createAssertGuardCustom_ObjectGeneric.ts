import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ObjectGeneric = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.createAssertGuard<ObjectGeneric>((p) => new CustomGuardError(p)));
