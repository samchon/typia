import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectGenericUnion = _test_assert(CustomGuardError)(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)(typia.createAssert<ObjectGenericUnion>((p) => new CustomGuardError(p)));
