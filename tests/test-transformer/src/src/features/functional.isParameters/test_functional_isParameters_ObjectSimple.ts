import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isParameters_ObjectSimple = (): void => _test_functional_isParameters(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => ObjectSimple) => typia.functional.isParameters(p),
)