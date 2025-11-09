import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectHierarchical = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)(typia.misc.createAssertPrune<ObjectHierarchical>());
