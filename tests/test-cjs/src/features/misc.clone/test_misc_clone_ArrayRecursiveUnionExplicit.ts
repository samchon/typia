import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_clone_ArrayRecursiveUnionExplicit = (): void =>
  _test_misc_clone("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit,
  )((input) => typia.misc.clone<ArrayRecursiveUnionExplicit>(input));
