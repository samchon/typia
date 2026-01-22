import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_validateReturn_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_validateReturn("ArrayRecursiveUnionExplicitPointer")(
      ArrayRecursiveUnionExplicitPointer,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.validateReturn(p),
    );
