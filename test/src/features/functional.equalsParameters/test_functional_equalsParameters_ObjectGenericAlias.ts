import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_equalsParameters_ObjectGenericAlias = (): void => _test_functional_equalsParameters(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => ObjectGenericAlias) => typia.functional.equalsParameters(p),
)