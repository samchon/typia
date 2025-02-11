import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectGenericAlias = _test_assert(CustomGuardError)(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.createAssert<ObjectGenericAlias>((p) => new CustomGuardError(p)));
