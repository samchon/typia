import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectPartial =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectPartial",
  )(ObjectPartial)((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
