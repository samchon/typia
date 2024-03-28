import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_assertFunctionCustom_ObjectUnionDouble =
  _test_functional_assertFunction(CustomGuardError)("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => ObjectUnionDouble) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
