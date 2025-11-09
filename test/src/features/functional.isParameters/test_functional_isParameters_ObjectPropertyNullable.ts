import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_isParameters_ObjectPropertyNullable = (): void => _test_functional_isParameters(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => ObjectPropertyNullable) => typia.functional.isParameters(p),
)