import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectIntersection =
  _test_functional_assertParameters(CustomGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
