import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertFunction_ObjectGenericAlias = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.assertFunction(p),
  );
