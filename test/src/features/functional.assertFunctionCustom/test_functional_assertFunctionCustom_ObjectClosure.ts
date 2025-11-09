import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertFunctionCustom_ObjectClosure = (): void =>
  _test_functional_assertFunction(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
