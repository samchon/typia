import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_clone_ArrayRecursiveUnionImplicit = (): void =>
  _test_misc_clone("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit,
  )((input) => typia.misc.clone<ArrayRecursiveUnionImplicit>(input));
