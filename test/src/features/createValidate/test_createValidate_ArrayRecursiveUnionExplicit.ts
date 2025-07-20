import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_createValidate_ArrayRecursiveUnionExplicit = (): void =>
  _test_validate("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit,
  )(typia.createValidate<ArrayRecursiveUnionExplicit>());
