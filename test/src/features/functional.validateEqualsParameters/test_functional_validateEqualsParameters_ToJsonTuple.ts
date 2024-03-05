import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsParameters_ToJsonTuple =
  _test_functional_validateEqualsParameters("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateEqualsParameters(p),
  );
