import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateParameters_ArrayRecursiveUnionImplicit =
  (): void =>
    _test_functional_validateParameters("ArrayRecursiveUnionImplicit")(
      ArrayRecursiveUnionImplicit,
    )(
      (
        p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit,
      ) => typia.functional.validateParameters(p),
    );
