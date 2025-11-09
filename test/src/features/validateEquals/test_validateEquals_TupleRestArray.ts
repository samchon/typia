import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validateEquals_TupleRestArray = (): void =>
  _test_validateEquals("TupleRestArray")<TupleRestArray>(TupleRestArray)(
    (input) => typia.validateEquals<TupleRestArray>(input),
  );
