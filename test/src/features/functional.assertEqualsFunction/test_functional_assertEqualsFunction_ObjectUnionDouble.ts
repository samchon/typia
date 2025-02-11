import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsFunction_ObjectUnionDouble =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertEqualsFunction(p),
  );
