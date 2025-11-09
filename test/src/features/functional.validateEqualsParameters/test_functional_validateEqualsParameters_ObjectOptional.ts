import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsParameters_ObjectOptional = (): void => _test_functional_validateEqualsParameters(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.validateEqualsParameters(p),
)