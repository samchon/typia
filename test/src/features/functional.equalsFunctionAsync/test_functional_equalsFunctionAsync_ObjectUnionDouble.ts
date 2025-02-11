import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_equalsFunctionAsync_ObjectUnionDouble = _test_functional_equalsFunctionAsync(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.equalsFunction(p),
)