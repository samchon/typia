import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_isParameters_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_isParameters("ArrayRecursiveUnionExplicitPointer")(
      ArrayRecursiveUnionExplicitPointer,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.isParameters(p),
    );
