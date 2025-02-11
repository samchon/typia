import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_assertEqualsFunction_ObjectClosure =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectClosure")(
    ObjectClosure,
  )((p: (input: ObjectClosure) => ObjectClosure) =>
    typia.functional.assertEqualsFunction(p),
  );
