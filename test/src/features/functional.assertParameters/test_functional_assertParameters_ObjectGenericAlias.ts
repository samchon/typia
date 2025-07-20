import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertParameters_ObjectGenericAlias = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
    typia.functional.assertParameters(p),
  );
