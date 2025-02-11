import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertReturnAsync_ObjectSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )((p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.assertReturn(p),
  );
