import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createIs_TupleUnion = (): void =>
  _test_is("TupleUnion")<TupleUnion>(TupleUnion)(typia.createIs<TupleUnion>());
