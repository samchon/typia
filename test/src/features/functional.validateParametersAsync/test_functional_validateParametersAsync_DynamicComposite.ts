import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateParametersAsync_DynamicComposite =
  _test_functional_validateParametersAsync("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.validateParameters(p),
  );
