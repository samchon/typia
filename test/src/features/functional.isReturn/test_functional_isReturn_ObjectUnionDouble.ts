import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_isReturn_ObjectUnionDouble = _test_functional_isReturn(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.isReturn(p),
)