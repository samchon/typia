import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createAssertClone_ArrayHierarchical =
  _test_misc_assertClone("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.misc.createAssertClone<ArrayHierarchical>());
