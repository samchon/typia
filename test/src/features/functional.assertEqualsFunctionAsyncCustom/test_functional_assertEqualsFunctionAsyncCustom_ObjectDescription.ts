import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectDescription =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ObjectDescription",
  )(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
