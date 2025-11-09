import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isReturn_ObjectOptional = (): void => _test_functional_isReturn(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.isReturn(p),
)