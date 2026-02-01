import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsReturn_ObjectOptional = (): void => _test_functional_equalsReturn(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.equalsReturn(p),
)