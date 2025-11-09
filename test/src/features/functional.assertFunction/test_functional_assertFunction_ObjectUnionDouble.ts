import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertFunction_ObjectUnionDouble = (): void =>
  _test_functional_assertFunction(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertFunction(p),
  );
