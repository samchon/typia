import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectUnionDouble =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertReturn(p),
  );
