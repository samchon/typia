import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsFunction_ObjectGenericAlias =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)("ObjectGenericAlias")(
      ObjectGenericAlias,
    )((p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.assertEqualsFunction(p),
    );
