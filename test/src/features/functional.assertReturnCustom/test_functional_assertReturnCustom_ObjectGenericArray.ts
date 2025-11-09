import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_assertReturnCustom_ObjectGenericArray = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
