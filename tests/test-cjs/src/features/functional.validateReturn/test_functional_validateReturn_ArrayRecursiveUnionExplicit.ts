import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateReturn_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_functional_validateReturn("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit,
      ) => typia.functional.validateReturn(p),
    );
