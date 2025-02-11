import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_isParameters_ObjectAlias = _test_functional_isParameters(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) => typia.functional.isParameters(p),
)