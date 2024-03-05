import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateFunction_DynamicComposite =
  _test_functional_validateFunction("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.validateFunction(p),
  );
