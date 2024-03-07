import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectGenericArray =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
