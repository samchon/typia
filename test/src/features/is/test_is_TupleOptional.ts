import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_is_TupleOptional = (): void =>
  _test_is("TupleOptional")<TupleOptional>(TupleOptional)((input) =>
    typia.is<TupleOptional>(input),
  );
