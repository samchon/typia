import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsParameters_ObjectAlias = (): void => _test_functional_equalsParameters(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.equalsParameters(p),
)