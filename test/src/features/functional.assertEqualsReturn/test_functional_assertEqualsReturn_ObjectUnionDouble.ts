import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertEqualsReturn_ObjectUnionDouble = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertEqualsReturn(p),
  );
