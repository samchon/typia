import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertFunctionAsyncCustom_ObjectClosure =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
