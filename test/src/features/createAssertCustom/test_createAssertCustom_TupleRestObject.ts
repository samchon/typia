import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createAssertCustom_TupleRestObject = (): void =>
  _test_assert(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.createAssert<TupleRestObject>((p) => new CustomGuardError(p)));
