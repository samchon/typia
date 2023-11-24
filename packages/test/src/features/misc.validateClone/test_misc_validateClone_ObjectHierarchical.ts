import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_validateClone_ObjectHierarchical =
  _test_misc_validateClone("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) => typia.misc.validateClone<ObjectHierarchical>(input));
