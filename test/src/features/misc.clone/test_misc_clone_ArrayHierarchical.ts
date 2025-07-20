import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_clone_ArrayHierarchical = (): void =>
  _test_misc_clone("ArrayHierarchical")<ArrayHierarchical>(ArrayHierarchical)(
    (input) => typia.misc.clone<ArrayHierarchical>(input),
  );
