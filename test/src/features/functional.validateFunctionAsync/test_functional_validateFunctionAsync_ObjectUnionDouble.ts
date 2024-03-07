import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateFunctionAsync_ObjectUnionDouble =
  _test_functional_validateFunctionAsync("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.validateFunction(p),
  );
