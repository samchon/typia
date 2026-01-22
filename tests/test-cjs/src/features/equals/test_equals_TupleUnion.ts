import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_equals_TupleUnion = (): void =>
  _test_equals("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
    typia.equals<TupleUnion>(input),
  );
