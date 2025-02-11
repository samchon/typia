import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateEqualsFunction_ObjectUnionDouble =
  _test_functional_validateEqualsFunction("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.validateEqualsFunction(p),
  );
