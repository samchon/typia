import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_equalsFunctionAsync_DynamicUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("DynamicUnion")(DynamicUnion)(
      (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
        typia.functional.equalsFunction(p),
    );
