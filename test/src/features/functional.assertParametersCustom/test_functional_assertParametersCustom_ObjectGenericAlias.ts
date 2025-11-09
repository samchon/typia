import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectGenericAlias = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)