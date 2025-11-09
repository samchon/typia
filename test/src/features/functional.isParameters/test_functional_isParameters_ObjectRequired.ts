import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isParameters_ObjectRequired = (): void => _test_functional_isParameters(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => ObjectRequired) => typia.functional.isParameters(p),
)