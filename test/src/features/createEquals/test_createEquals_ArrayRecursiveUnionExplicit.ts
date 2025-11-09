import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createEquals_ArrayRecursiveUnionExplicit = (): void =>
  _test_equals("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit,
  )(typia.createEquals<ArrayRecursiveUnionExplicit>());
