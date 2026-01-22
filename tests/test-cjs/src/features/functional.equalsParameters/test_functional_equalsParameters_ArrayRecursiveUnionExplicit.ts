import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_equalsParameters_ArrayRecursiveUnionExplicit =
  (): void =>
    _test_functional_equalsParameters("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit,
      ) => typia.functional.equalsParameters(p),
    );
