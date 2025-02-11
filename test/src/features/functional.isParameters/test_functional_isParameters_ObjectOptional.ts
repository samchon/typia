import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isParameters_ObjectOptional = _test_functional_isParameters(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.isParameters(p),
)