import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_equals_TupleOptional = _test_equals(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) => typia.equals<TupleOptional>(input));
