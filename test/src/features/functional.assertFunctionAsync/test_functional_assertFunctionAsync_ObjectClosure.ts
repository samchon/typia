import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertFunctionAsync_ObjectClosure =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertFunction(p),
  );
