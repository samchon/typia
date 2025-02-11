import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_isFunction_ObjectUnionDouble =
  _test_functional_isFunction("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
      typia.functional.isFunction(p),
  );
