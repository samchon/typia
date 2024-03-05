import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateReturn_ArrayRecursiveUnionImplicit =
  _test_functional_validateReturn("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )((p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) =>
    typia.functional.validateReturn(p),
  );
