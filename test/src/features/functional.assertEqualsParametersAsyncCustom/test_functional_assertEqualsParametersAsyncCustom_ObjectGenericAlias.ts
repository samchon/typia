import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsParametersAsyncCustom_ObjectGenericAlias =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ObjectGenericAlias",
  )(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
