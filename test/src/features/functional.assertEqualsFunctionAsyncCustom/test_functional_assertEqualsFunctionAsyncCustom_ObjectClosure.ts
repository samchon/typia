import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectClosure =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
