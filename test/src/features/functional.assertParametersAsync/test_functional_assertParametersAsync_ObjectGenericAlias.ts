import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertParametersAsync_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectGenericAlias",
    )(ObjectGenericAlias)(
      (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
        typia.functional.assertParameters(p),
    );
