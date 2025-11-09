import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsReturnAsync_ObjectGeneric =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectGeneric")(
      ObjectGeneric,
    )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      typia.functional.assertEqualsReturn(p),
    );
