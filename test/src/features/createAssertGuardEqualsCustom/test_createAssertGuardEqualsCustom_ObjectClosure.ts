import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertGuardEqualsCustom_ObjectClosure =
  _test_assertGuardEquals(CustomGuardError)("ObjectClosure")<ObjectClosure>(
    ObjectClosure,
  )(
    typia.createAssertGuardEquals<ObjectClosure>(
      (p) => new CustomGuardError(p),
    ),
  );
