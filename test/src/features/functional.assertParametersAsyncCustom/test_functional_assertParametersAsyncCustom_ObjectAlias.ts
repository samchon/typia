import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertParametersAsyncCustom_ObjectAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("ObjectAlias")(
      ObjectAlias,
    )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
