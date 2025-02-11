import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsParametersAsync_ObjectPartial =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertEqualsParameters(p),
  );
