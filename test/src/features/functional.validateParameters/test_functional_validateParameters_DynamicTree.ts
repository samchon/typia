import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateParameters_DynamicTree = (): void =>
  _test_functional_validateParameters("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.validateParameters(p),
  );
