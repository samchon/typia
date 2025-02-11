import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsReturnAsync_ObjectClosure =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertEqualsReturn(p),
  );
