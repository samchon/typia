import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertGuardEqualsCustom_ObjectHttpArray = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(
    typia.createAssertGuardEquals<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
  );
