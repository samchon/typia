import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectGenericAlias = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)