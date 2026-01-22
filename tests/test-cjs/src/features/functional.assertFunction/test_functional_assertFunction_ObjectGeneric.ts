import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_assertFunction_ObjectGeneric = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectGeneric")(
    ObjectGeneric,
  )((p: (input: ObjectGeneric) => ObjectGeneric) =>
    typia.functional.assertFunction(p),
  );
