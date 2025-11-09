import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectGeneric = (): void => _test_assert(CustomGuardError)(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.createAssert<ObjectGeneric>((p) => new CustomGuardError(p)));
