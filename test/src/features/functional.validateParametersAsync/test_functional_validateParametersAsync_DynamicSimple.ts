import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_functional_validateParametersAsync_DynamicSimple =
  _test_functional_validateParametersAsync("DynamicSimple")(DynamicSimple)(
    (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
      typia.functional.validateParameters(p),
  );
