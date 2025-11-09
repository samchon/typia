import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_ObjectHierarchical = (): void => _test_misc_assertPrune(CustomGuardError)(
    "ObjectHierarchical",
)<ObjectHierarchical>(
    ObjectHierarchical
)((input) => typia.misc.assertPrune<ObjectHierarchical>(input, (p) => new CustomGuardError(p)));
