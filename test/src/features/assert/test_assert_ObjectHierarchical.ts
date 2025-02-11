import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_assert_ObjectHierarchical = _test_assert(TypeGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)((input) => typia.assert<ObjectHierarchical>(input));
