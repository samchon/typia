import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertReturn_ObjectGenericAlias = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.assertReturn(p),
  );
