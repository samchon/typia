import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_isParametersAsync_ArrayRecursiveUnionExplicit =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ArrayRecursiveUnionExplicit")(
      ArrayRecursiveUnionExplicit,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicit,
        ) => Promise<ArrayRecursiveUnionExplicit>,
      ) => typia.functional.isParameters(p),
    );
