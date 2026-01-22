import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertGuardCustom_TupleRestObject = (): void =>
  _test_assertGuard(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.createAssertGuard<TupleRestObject>((p) => new CustomGuardError(p)));
