import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createPrune_ObjectHierarchical = (): void =>
  _test_misc_prune("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.misc.createPrune<ObjectHierarchical>());
