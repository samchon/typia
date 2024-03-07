import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectGeneric =
  _test_functional_assertParametersAsync(CustomGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
