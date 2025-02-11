import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isParameters_ObjectGeneric = _test_functional_isParameters(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => ObjectGeneric) => typia.functional.isParameters(p),
)