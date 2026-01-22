import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectNullable =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "ObjectNullable",
    )(ObjectNullable)((p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
