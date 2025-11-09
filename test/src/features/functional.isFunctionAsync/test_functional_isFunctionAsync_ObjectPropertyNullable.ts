import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_functional_isFunctionAsync_ObjectPropertyNullable = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectPropertyNullable"
)(ObjectPropertyNullable)(
  (p: (input: ObjectPropertyNullable) => Promise<ObjectPropertyNullable>) =>
    typia.functional.isFunction(p),
)