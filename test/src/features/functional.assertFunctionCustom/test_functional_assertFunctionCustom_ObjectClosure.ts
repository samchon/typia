import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectClosure =
  _test_functional_assertFunction(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
