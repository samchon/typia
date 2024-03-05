import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_isReturn_ObjectTuple = _test_functional_isReturn(
  "ObjectTuple",
)(ObjectTuple)((p: (input: ObjectTuple) => ObjectTuple) =>
  typia.functional.isReturn(p),
);
