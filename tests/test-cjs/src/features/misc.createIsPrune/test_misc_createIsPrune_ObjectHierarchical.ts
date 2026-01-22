import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createIsPrune_ObjectHierarchical = (): void =>
  _test_misc_isPrune("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.misc.createIsPrune<ObjectHierarchical>());
