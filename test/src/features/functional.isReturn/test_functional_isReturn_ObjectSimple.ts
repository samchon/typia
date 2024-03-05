import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isReturn_ObjectSimple = _test_functional_isReturn(
  "ObjectSimple",
)(ObjectSimple)((p: (input: ObjectSimple) => ObjectSimple) =>
  typia.functional.isReturn(p),
);
