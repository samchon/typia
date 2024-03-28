import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectAlias =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
