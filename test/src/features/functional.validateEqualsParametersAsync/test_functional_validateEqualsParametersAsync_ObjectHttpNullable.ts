import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateEqualsParametersAsync_ObjectHttpNullable =
  _test_functional_validateEqualsParametersAsync("ObjectHttpNullable")(
    ObjectHttpNullable,
  )((p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.validateEqualsParameters(p),
  );
