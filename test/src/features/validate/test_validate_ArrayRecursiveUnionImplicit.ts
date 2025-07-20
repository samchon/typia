import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_validate_ArrayRecursiveUnionImplicit = (): void =>
  _test_validate("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit,
  )((input) => typia.validate<ArrayRecursiveUnionImplicit>(input));
