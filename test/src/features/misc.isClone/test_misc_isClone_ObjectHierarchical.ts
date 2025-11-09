import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_isClone_ObjectHierarchical = (): void =>
  _test_misc_isClone("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) => typia.misc.isClone<ObjectHierarchical>(input));
