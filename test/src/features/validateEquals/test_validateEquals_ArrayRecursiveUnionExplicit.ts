import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_validateEquals_ArrayRecursiveUnionExplicit = (): void =>
  _test_validateEquals(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.validateEquals<ArrayRecursiveUnionExplicit>(input),
  );
