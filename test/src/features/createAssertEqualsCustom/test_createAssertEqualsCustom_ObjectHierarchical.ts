import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectHierarchical = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.createAssertEquals<ObjectHierarchical>((p) => new CustomGuardError(p)));
