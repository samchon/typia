import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_functional_equalsFunctionAsync_ObjectNullable = _test_functional_equalsFunctionAsync(
  "ObjectNullable"
)(ObjectNullable)(
  (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
    typia.functional.equalsFunction(p),
)