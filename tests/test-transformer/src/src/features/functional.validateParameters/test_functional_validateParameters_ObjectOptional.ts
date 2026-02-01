import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateParameters_ObjectOptional = (): void => _test_functional_validateParameters(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.validateParameters(p),
)