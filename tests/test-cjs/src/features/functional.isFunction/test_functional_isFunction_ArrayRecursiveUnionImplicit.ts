import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_isFunction_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_functional_isFunction("ArrayRecursiveUnionImplicit")(
      ArrayRecursiveUnionImplicit,
    )(
      (
        p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit,
      ) => typia.functional.isFunction(p),
    );
