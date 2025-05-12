import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_standardSchema_createValidate_ObjectHierarchical =
  _test_standardSchema_validate("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.createValidate<ObjectHierarchical>());
