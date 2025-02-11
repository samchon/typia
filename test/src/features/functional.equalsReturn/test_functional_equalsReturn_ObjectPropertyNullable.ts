import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_equalsReturn_ObjectPropertyNullable = _test_functional_equalsReturn(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.equalsReturn(p),
)