import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectHierarchical = (): void => _test_assert(CustomGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.createAssert<ObjectHierarchical>((p) => new CustomGuardError(p)));
