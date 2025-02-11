import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertParametersAsync_ObjectPartial =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertParameters(p),
  );
