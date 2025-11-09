import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidateEquals_ObjectHierarchical = (): void =>
  _test_validateEquals("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.createValidateEquals<ObjectHierarchical>());
