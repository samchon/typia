import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertEqualsCustom_TupleOptional = (): void =>
  _test_assertEquals(CustomGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )(typia.createAssertEquals<TupleOptional>((p) => new CustomGuardError(p)));
