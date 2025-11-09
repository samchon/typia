import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertCustom_ObjectGenericArray = (): void =>
  _test_assert(CustomGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) =>
    typia.assert<ObjectGenericArray>(input, (p) => new CustomGuardError(p)),
  );
