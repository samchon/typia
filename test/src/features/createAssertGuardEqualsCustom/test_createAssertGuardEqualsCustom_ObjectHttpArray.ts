import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectHttpArray =
  _test_assertGuardEquals(CustomGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(
    typia.createAssertGuardEquals<ObjectHttpArray>(
      (p) => new CustomGuardError(p),
    ),
  );
