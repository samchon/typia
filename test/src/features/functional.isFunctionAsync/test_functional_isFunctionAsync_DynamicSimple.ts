import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_isFunctionAsync_DynamicSimple =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("DynamicSimple")(DynamicSimple)(
      (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
        typia.functional.isFunction(p),
    );
