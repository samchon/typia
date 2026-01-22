import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertEquals_TupleUnion = (): void =>
  _test_assertEquals(TypeGuardError)("TupleUnion")<TupleUnion>(TupleUnion)(
    (input) => typia.assertEquals<TupleUnion>(input),
  );
