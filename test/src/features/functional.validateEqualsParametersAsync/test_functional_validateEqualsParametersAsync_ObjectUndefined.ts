import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsParametersAsync_ObjectUndefined =
  _test_functional_validateEqualsParametersAsync("ObjectUndefined")(
    ObjectUndefined,
  )((p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.validateEqualsParameters(p),
  );
