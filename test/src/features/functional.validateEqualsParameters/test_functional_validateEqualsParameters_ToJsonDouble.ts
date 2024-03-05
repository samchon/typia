import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsParameters_ToJsonDouble =
  _test_functional_validateEqualsParameters("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.validateEqualsParameters(p),
  );
