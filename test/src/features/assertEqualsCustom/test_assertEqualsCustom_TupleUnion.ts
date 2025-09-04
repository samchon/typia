import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertEqualsCustom_TupleUnion = (): void =>
  _test_assertEquals(CustomGuardError)("TupleUnion")<TupleUnion>(TupleUnion)(
    (input) =>
      typia.assertEquals<TupleUnion>(input, (p) => new CustomGuardError(p)),
  );
