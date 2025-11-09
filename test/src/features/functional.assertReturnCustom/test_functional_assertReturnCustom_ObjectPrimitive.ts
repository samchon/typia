import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_assertReturnCustom_ObjectPrimitive = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectPrimitive")(
    ObjectPrimitive,
  )((p: (input: ObjectPrimitive) => ObjectPrimitive) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
