import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_equalsReturn_TupleRestObject = (): void =>
  _test_functional_equalsReturn("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.equalsReturn(p),
  );
