import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createValidateEquals_ArrayRecursiveUnionImplicit = (): void =>
  _test_validateEquals(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.createValidateEquals<ArrayRecursiveUnionImplicit>(),
  );
