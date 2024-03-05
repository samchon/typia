import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsParameters_DynamicComposite =
  _test_functional_validateEqualsParameters("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => DynamicComposite) =>
    typia.functional.validateEqualsParameters(p),
  );
