import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertEqualsCustom_TupleRestArray = (): void =>
  _test_assertEquals(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.createAssertEquals<TupleRestArray>((p) => new CustomGuardError(p)));
