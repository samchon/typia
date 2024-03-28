import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertParameters_ObjectUnionDouble =
  _test_functional_assertParameters(TypeGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertParameters(p),
  );
