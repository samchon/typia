import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsParametersAsync_ObjectPartial =
  _test_functional_validateEqualsParametersAsync("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.validateEqualsParameters(p),
  );
