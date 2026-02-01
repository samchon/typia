import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateEqualsParameters_ObjectUnionDouble = (): void => _test_functional_validateEqualsParameters(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.validateEqualsParameters(p),
)