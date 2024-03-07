import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_equalsParametersAsync_ArrayRecursiveUnionExplicit =
  _test_functional_equalsParametersAsync("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) => typia.functional.equalsParameters(p),
  );
