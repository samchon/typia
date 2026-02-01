import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_equalsParameters_ObjectTuple = (): void => _test_functional_equalsParameters(
  "ObjectTuple"
)(ObjectTuple)(
  (p: (input: ObjectTuple) => ObjectTuple) => typia.functional.equalsParameters(p),
)