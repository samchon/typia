import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertEqualsCustom_TupleOptional = (): void =>
  _test_assertEquals(CustomGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )((input) =>
    typia.assertEquals<TupleOptional>(input, (p) => new CustomGuardError(p)),
  );
