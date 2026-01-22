import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertGuardEqualsCustom_ObjectHttpArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) =>
    typia.assertGuardEquals<ObjectHttpArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
