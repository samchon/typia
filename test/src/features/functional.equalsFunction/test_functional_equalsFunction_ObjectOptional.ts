import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsFunction_ObjectOptional = _test_functional_equalsFunction(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.equalsFunction(p),
)