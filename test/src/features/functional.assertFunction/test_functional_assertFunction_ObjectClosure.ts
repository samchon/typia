import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertFunction_ObjectClosure =
  _test_functional_assertFunction(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertFunction(p),
  );
