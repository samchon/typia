import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_isParameters_ObjectUnionDouble = (): void => _test_functional_isParameters(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.isParameters(p),
)