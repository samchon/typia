import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_assertEquals_ArrayHierarchical = (): void =>
  _test_assertEquals(TypeGuardError)("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )((input) => typia.assertEquals<ArrayHierarchical>(input));
