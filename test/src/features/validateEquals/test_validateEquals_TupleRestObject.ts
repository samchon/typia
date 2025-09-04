import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_validateEquals_TupleRestObject = (): void =>
  _test_validateEquals("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    (input) => typia.validateEquals<TupleRestObject>(input),
  );
