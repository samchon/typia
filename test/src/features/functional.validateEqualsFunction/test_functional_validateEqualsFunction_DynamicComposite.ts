import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsFunction_DynamicComposite =
  _test_functional_validateEqualsFunction("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.validateEqualsFunction(p),
  );
