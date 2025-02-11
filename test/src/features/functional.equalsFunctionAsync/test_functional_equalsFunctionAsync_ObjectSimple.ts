import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsFunctionAsync_ObjectSimple = _test_functional_equalsFunctionAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.equalsFunction(p),
)