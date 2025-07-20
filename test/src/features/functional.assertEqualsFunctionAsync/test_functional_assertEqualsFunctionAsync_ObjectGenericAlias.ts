import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertEqualsFunctionAsync_ObjectGenericAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ObjectGenericAlias",
    )(ObjectGenericAlias)(
      (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
        typia.functional.assertEqualsFunction(p),
    );
