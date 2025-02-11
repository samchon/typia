import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectGenericAlias = _test_functional_assertParameters(TypeGuardError)(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.assertParameters(p),
)