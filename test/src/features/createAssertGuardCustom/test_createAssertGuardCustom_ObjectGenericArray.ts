import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertGuardCustom_ObjectGenericArray =
  _test_assertGuard(CustomGuardError)("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(
    typia.createAssertGuard<ObjectGenericArray>((p) => new CustomGuardError(p)),
  );
