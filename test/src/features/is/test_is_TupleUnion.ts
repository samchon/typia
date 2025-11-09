import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_is_TupleUnion = (): void =>
  _test_is("TupleUnion")<TupleUnion>(TupleUnion)((input) =>
    typia.is<TupleUnion>(input),
  );
