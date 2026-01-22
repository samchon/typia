import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertParametersAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("ObjectGeneric")(
      ObjectGeneric,
    )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.assertParameters(p),
    );
