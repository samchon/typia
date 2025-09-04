import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_validateParameters_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_functional_validateParameters("ArrayRecursiveUnionExplicitPointer")(
      ArrayRecursiveUnionExplicitPointer,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => ArrayRecursiveUnionExplicitPointer,
      ) => typia.functional.validateParameters(p),
    );
