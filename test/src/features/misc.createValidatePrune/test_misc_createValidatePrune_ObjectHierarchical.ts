import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createValidatePrune_ObjectHierarchical = (): void =>
  _test_misc_validatePrune("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.misc.createValidatePrune<ObjectHierarchical>());
