import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertEqualsFunction_ObjectGeneric =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertEqualsFunction(p),
  );
