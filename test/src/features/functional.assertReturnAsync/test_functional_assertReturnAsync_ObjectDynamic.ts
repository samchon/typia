import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectDynamic =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectDynamic")(
    ObjectDynamic,
  )((p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
    typia.functional.assertReturn(p),
  );
