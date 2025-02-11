import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_isReturn_ObjectPropertyNullable = _test_functional_isReturn(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.isReturn(p),
)