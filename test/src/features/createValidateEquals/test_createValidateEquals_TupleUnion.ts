import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createValidateEquals_TupleUnion = _test_validateEquals(
  "TupleUnion",
)<TupleUnion>(TupleUnion)(typia.createValidateEquals<TupleUnion>());
