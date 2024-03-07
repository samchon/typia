import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsParametersAsync_ObjectRequired =
  _test_functional_validateEqualsParametersAsync("ObjectRequired")(
    ObjectRequired,
  )((p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.validateEqualsParameters(p),
  );
