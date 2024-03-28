import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertReturnAsync_ObjectGeneric =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.assertReturn(p),
  );
