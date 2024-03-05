import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateParameters_DynamicComposite =
  _test_functional_validateParameters("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      typia.functional.validateParameters(p),
  );
