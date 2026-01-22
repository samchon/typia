import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertReturnCustom_ObjectIntersection = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
