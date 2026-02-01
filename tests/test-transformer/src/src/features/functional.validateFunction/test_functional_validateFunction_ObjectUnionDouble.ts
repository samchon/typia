import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateFunction_ObjectUnionDouble = (): void => _test_functional_validateFunction(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.validateFunction(p),
)