import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectGenericAlias =
  _test_functional_assertParametersAsync(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.assertParameters(p),
  );
