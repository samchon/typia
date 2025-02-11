import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectGenericAlias =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectGenericAlias",
  )(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
