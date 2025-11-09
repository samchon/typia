import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createIs_TupleRestArray = (): void =>
  _test_is("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    typia.createIs<TupleRestArray>(),
  );
