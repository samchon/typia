import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsFunctionCustom_ObjectClosure =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
